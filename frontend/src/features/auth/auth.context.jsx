import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
import { getUser } from "./api/auth.api";

export const AuthContext = createContext()

export const AuthProvider = ({children})=>{
    const [user, setUser] = useState(null)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(()=>{
        
        async function getAndSetUser(){
            try {
                const response = await getUser()
                setUser(response.user)
                
            } catch (error) {
                console.log(error)
            }
            finally{
                setIsLoading(false)
            }
        }

        getAndSetUser()
    },[])
    return (
        <AuthContext.Provider value={{user, setUser, isLoading, setIsLoading}}>
            {children}
        </AuthContext.Provider>
    )
}