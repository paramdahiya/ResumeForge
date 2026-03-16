import { useContext } from "react";
import { AuthContext } from "../features/auth/auth.context";
import { loginUser, logOutUser, registerUser } from "../features/auth/api/auth.api";

// contains the method for login, registeration, logout and getMe

export const useAuth = ()=>{
    const {user, setUser, isLoading, setIsLoading} = useContext(AuthContext)

    async function handleLogin({email, password}){
        setIsLoading(true)
        try {
            const response = await loginUser({email, password}) // login user return response.data
            setUser(response.user)
            return response 
        } catch (error) {
            throw(error)   
        }
        finally{
            setIsLoading(false)
        }
    }

    async function handleUserRegisteration({userName, email, password}){
        setIsLoading(true)
        try {
            const response = await registerUser({userName, email, password})
            setUser(response.user)
            return response
        } catch (error) {
            throw(error)
        }
        finally{
            setIsLoading(false)
        }
    }

    async function handleLogout(){
        await logOutUser()
        setUser(null)
        setIsLoading(false)
    }

    return {user,isLoading, handleLogin, handleUserRegisteration, handleLogout}
}