const { GoogleGenAI } = require("@google/genai");
const {instructions, reportSchema} = require('./gemini.config')
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

module.exports = generateInterviewReport