import React from "react";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-hot-toast'

const Homepage = () => {
    const router = useNavigate()

    function routerToLogin() {
        router('/login')
    }
    return (
        <div>
            <h1>Homepage</h1>
            <button onClick={() => router('/login')}>Go To Login</button>
            <button onClick={routerToLogin}>Go to Login</button>
            <button onClick={() => router('/register')}>Register</button>
            <button style={{ backgroundColor: "red" }} onClick={() => toast.success("clicked")}>click for toast</button>
        </div>
    )
}

export default Homepage