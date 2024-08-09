import React from 'react';
import "./LoginForm.css";
import { FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { useState } from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom';

const LoginForm = () => {
    const [loginDetails, setLoginDetails] = useState({
        email: "",
        password: ""
    });
    const [validLoginDetails, setValidLoginDetails] = useState({
        email: "",
        password: ""
    })

    const handleInputChange = (e, param) => {
        if (param === "email") {
            let value = e.target.value;
            const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            if (re.test(value)) {
                setLoginDetails(prev => ({
                    ...prev,
                    email: value
                }));
                setValidLoginDetails(prev => ({
                    ...prev,
                    email: ""
                }));
            } else {
                setLoginDetails(prev => ({
                    ...prev,
                    email: value
                }));
                setValidLoginDetails(prev => ({
                    ...prev,
                    email: "Invalid Email"
                }));
            }
        } if (param === "password") {
            let value = e.target.value
            const re = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
            if (re.test(value)) {
                setLoginDetails(prev => ({
                    ...prev,
                    password: e.target.value
                }));
                setValidLoginDetails(prev => ({
                    ...prev,
                    password: ""
                }));
            } else {
                setLoginDetails(prev => ({
                    ...prev,
                    password: e.target.value
                }));
                setValidLoginDetails(prev => ({
                    ...prev,
                    password: "Invalid Password"
                }));
            }
        }
    }

    const onLogin = () => {
        let validationDetails = { ...validLoginDetails };
        if (loginDetails.email === "") {
            validationDetails.email = "Email is Required"
        } else {
            validationDetails.email = ""
        }
        if (loginDetails.password === "") {
            validationDetails.password = "Password is Required"
        } else {
            validationDetails.password = ""
        }
        setValidLoginDetails(validationDetails);
    }

    return (
        <div className="wrapper">
            <h1>Login</h1>
            <div className="input-box">
                <input type='text' placeholder='Email' onChange={(e) => { handleInputChange(e, "email") }}></input>
                <MdEmail className='icon' />
                <p>{validLoginDetails.email}</p>
            </div>
            <div className="input-box">
                <input type='password' placeholder='Password' onChange={(e) => { handleInputChange(e, "password") }}></input>
                <FaLock className='icon' />
                <p>{validLoginDetails.password}</p>
            </div>
            <button type='button' onClick={() => onLogin()}>Login</button>
            <div className="register-link">
                <p>Don't have an account? <Link to={"/signup"}>SignUp</Link></p>
            </div>
        </div>
    )
}

export default LoginForm