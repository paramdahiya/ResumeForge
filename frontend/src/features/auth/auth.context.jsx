import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
import { getUser } from "./api/auth.api";

export const AuthContext = createContext()

export const AuthProvider = ({children})=>{
    const [user, setUser] = useState(null)
    const [isLoading, setIsLoading] = useState(false)

    // useEffect(()=>{
    //     async function getAndSetUser(){
    //         try {
    //             const response = await getUser()
    //             console.log(response)
    //             setUser(response.user)
                
    //         } catch (error) {
    //             console.log(error)
    //             navigate('/login')
    //         }
    //         finally{
    //             setIsLoading(false)
    //             navigate('/login')
    //         }
    //     }

    //     getAndSetUser()
    // },[])

    return (
        <AuthContext.Provider value={{user, setUser, isLoading, setIsLoading}}>
            {children}
        </AuthContext.Provider>
    )
}