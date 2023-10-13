import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Register.css'

const Register2 = () => {
    const [userData, setUserData] = useState({ name: "", email: "", password: "" })
    const router = useNavigate()

    const handleChange = (event) => {
        // console.log(event.target.value, "value",event.target.name,"name")
        setUserData({ ...userData, [event.target.name]: event.target.value })

    }

    const sendDataToBackend = async (event) => {
        event.preventDefault();
        if (userData.name && userData.email && userData.password) {
            if (userData.password.length >= 8) {
                //    const response = await axios.post("http://localhost:8000/register", {userData}) 
                const response = { data: { success: true } };
                if (response.data.success) {
                    alert("registration successfull...")  
                    setUserData({ name: "", email: "", password: "" })
                    router('/')
                }
            } else {
                alert("password must be 8 digit.")
            }

        } else {
            alert("please fill all the values")
        }

    }
    return (
        <div className='container'>
            <h1>Register</h1>
            <form onSubmit={sendDataToBackend}>
                <label>Name</label><br />
                <input name='name' type='text' onChange={handleChange} /><br />
                <label>Email</label><br />
                <input name='email' type='email' onChange={handleChange} /><br />
                <label>password</label><br />
                <input name='password' type='password' onChange={handleChange} /><br />
                <input type="submit" value="register here" />
            </form>
        </div>
    )
}

export default Register2