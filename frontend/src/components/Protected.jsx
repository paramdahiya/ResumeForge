// component to wrap the routes that need to be authenticated before access
import React from 'react'

import { AuthContext } from '../features/auth/auth.context'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

export default function Protected({children}) {
    const {isLoading, user} = useContext(AuthContext)
    const navigate = useNavigate()

    useEffect(()=>{
        
        if(!isLoading && !user){
            navigate('/login')
        }
    },[user, navigate, isLoading])
    return (
        children
    )
}
