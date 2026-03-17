import axios from 'axios'

// instance of axios
const api = axios.create({
    baseURL:'http://localhost:8080',
    withCredentials:true
})

export const registerUser = async ({userName, email, password})=>{
    try {
        // send the data to the server
        const response = await api.post('/api/auth/register', {userName, email, password})
        return response.data

    } catch (error) {
        throw(error)
    }
}

export const loginUser = async ({email, password})=>{
    try {
        const response = await api.post('/api/auth/login', {email, password})

        return response.data
    } catch (error) {
        throw(error)
    }
}

export const logOutUser = async ()=>{
    const response = await api.post('/logout')
    return response.data
}

export const getUser = async ()=>{
    try {
        const response = await api.get('/api/auth/get-me')
        return response.data
    } catch (error) {
        throw(error)
    }
}