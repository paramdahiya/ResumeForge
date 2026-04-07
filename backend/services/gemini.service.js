const { GoogleGenAI } = require("@google/genai");
const {instructions, reportSchema, resumeAnalysisSchema} = require('./gemini.config')
const {z} = require('zod')

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY
});


const generateInterviewReport = async({resume, jd, sd})=>{

  // tell gemini the structure of the response
  const rawSchema = z.toJSONSchema(reportSchema);
 
  const PROMPT = `Generate an interview report based on these details:
                  Job: ${jd}
                  self-description: ${sd}
                  resume: ${resume} `;

  try {
    const result = await ai.models.generateContent({
      model:"gemini-2.5-flash",
      contents: [{ role: "user", parts: [{ text: PROMPT }] }],
      config:{
        responseMimeType:'application/json',
        responseSchema: rawSchema
      }
    });

    const responseText = result.text;
    const rawJson = JSON.parse(responseText);

    // response validation
    reportSchema.parse(rawJson)
    console.log(rawJson)
    return rawJson

  } catch (error) {
    if (error instanceof z.ZodError) {
      console.error("AI output didn't match the schema:", error.errors);
    } else {
      console.error("Error calling Gemini API:", error);
    }
  }
}

const analyseResume = async ({resume})=>{

  // tell gemini the structure of the response
  const rawSchema = z.toJSONSchema(resumeAnalysisSchema);
 
  const PROMPT = `You are a senior hiring manager with 7+ years of experience in multiple different fields such as IT and Business. Your task is to analyse the candidate's resume and provide a tailored analysis of the resume based on the industry standards to help the candidate improve their current resume. I will now attach the resume: ${resume}`;
  try {
    const result = await ai.models.generateContent({
        model:"gemini-2.5-flash",
        contents: [{ role: "user", parts: [{ text: PROMPT }] }],
        config:{
          responseMimeType:'application/json',
          responseSchema: rawSchema
        }
    });
    const responseText = result.text;
    const rawJson = JSON.parse(responseText);

    resumeAnalysisSchema.parse(rawJson); // errors will be caught
    return rawJson;
    
  }
  catch(e){
    if (e instanceof z.ZodError){
      return res.status(500).josn({message:"Sorry the analysis cannot be done at the moment."});
    }else {
      console.error("Error calling Gemini API:", error);
    }
  }
}

module.exports = {generateInterviewReport, analyseResume};