import React from 'react'
import { useLocation } from 'react-router-dom'

export const SignInView = () => {
const location = useLocation()  
    return (
        <div>
            <h1>You are in the SignInView</h1>
            <p>
                {location.state}
            </p>
        </div>
    )
}
