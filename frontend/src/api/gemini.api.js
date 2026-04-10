import axios from "axios";

const api = axios.create({
    baseURL:"http://localhost:8080/api/report",
    withCredentials:true,
})

// post request
export const getInterviewReport = async ({jobDescription, selfDescription, resume})=>{
    const formData = new FormData();
    formData.append("resume", resume);
    formData.append("jobDescription", jobDescription);
    formData.append("selfDescription", selfDescription);

    try {
        // send req
        const data = await api.post("/generateReport",formData);
        console.log(data.report);
        return;

    } catch (error) {
        console.log(error);
    }
}