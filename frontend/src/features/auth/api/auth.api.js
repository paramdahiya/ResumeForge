import axios from 'axios'

const REGISTER_URL='http://localhost:8080/api/auth/register'
export const registerUser = async ({userName, email, password})=>{
    try {
        // send the data to the server
        const response = await axios.post(REGISTER_URL, {userName, email, password}, {
            withCredentials:true
        })
        return response.data

    } catch (error) {
        throw(error)
    }
}

const LOGIN_URL='http://localhost:8080/api/auth/login'
export const loginUser = async ({email, password})=>{
    try {
        const response = await axios.post(LOGIN_URL, {email, password}, {
            withCredentials:true
        })

        return response.data
    } catch (error) {
        throw(error)
    }
}