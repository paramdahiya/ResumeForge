// component to wrap the routes that need to be authenticated before access
import React from 'react'

import { AuthContext } from '../features/auth/auth.context'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { getUser } from "../features/auth/api/auth.api";

export default function Protected({children}) {
    const {user, setUser, isLoading, setIsLoading} = useContext(AuthContext)
    const navigate = useNavigate()

    useEffect(()=>{
        async function getAndSetUser(){
            try {
                const response = await getUser()
                console.log(response)
                setUser(response.user)
                
            } catch (error) {
                console.log(error)
                navigate('/login')
            }
            finally{
                setIsLoading(false)
                // navigate('/login')
            }
        }

        getAndSetUser()
    },[setUser, navigate])
    // useEffect(()=>{
    //     console.log(user)
    //     if(!isLoading && !user){
    //         navigate('/login')
    //     }
    // },[user, navigate, isLoading])
    return (
        children
    )
}
