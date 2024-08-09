import React from 'react';
import "./SignupForm.css";
import { FaUser, FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { useState } from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom';
import { Tooltip as ReactTooltip } from 'react-tooltip';

const SignupForm = () => {
    const [signUpDetails, setSignUpDetails] = useState({
        userName: "",
        email: "",
        password: "",
        confirmpassward: ""
    });
    const [validSignUpDetails, setValidSignUpDetails] = useState({
        userName: "",
        email: "",
        password: "",
        confirmpassward: ""
    })

    const handleInputChange = (e, param) => {
        if (param === "userName") {
            let value = e.target.value;
            if (value.length >= 3 && value.length <= 25) {
                setSignUpDetails(prev => ({
                    ...prev,
                    userName: e.target.value
                }));
                setValidSignUpDetails(prev => ({
                    ...prev,
                    userName: ""
                }));
            } else {
                setSignUpDetails(prev => ({
                    ...prev,
                    userName: e.target.value
                }));
                setValidSignUpDetails(prev => ({
                    ...prev,
                    userName: "Username must be between 3 and 25 characters"
                }));
            }
        }

        if (param === "password") {
            let value = e.target.value
            const re = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
            if (re.test(value)) {
                setSignUpDetails(prev => ({
                    ...prev,
                    password: e.target.value
                }));
                setValidSignUpDetails(prev => ({
                    ...prev,
                    password: ""
                }));
            } else {
                setSignUpDetails(prev => ({
                    ...prev,
                    password: e.target.value
                }));
                setValidSignUpDetails(prev => ({
                    ...prev,
                    password: "Invalid Password"
                }));
            }
        }

        if (param === "email") {
            const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            if (re.test(e.target.value)) {
                setSignUpDetails(prev => ({
                    ...prev,
                    email: e.target.value
                }));
                setValidSignUpDetails(prev => ({
                    ...prev,
                    email: ""
                }));
            } else {
                setSignUpDetails(prev => ({
                    ...prev,
                    email: e.target.value
                }));
                setValidSignUpDetails(prev => ({
                    ...prev,
                    email: "Invalid Email"
                }));
            }
        }

        if (param === "confirmPassword") {
            setSignUpDetails(prev => ({
                ...prev,
                confirmpassward: e.target.value
            }));
            setValidSignUpDetails(prev => ({
                ...prev,
                confirmpassward: ""
            }));
        }
    }

    const onLogin = () => {
        let details = { ...validSignUpDetails };
        if (signUpDetails.userName === "") {
            details.userName = "UserName is Required"
        } else {
            details.userName = ""
        }

        if (signUpDetails.email === "") {
            details.email = "Email is Required"
        } else {
            details.email = ""
        }

        if (signUpDetails.password === "") {
            details.password = "Password is Required"
        } else {
            details.password = ""
        }

        if (signUpDetails.confirmpassward === "") {
            details.confirmpassward = "Confirm Password is Required"
        } else {
            if (signUpDetails.password != signUpDetails.confirmpassward) {
                details.confirmpassward = "Password and Comfirm Password must be same"
            } else {
                details.confirmpassward = ""
            }
        }

        setValidSignUpDetails(details);
    }

    return (
        <div className="sign-wrapper">
            <h1>Sign Up</h1>
            <div className="input-box">
                <input type='text' placeholder='Username' onChange={(e) => { handleInputChange(e, "userName") }}></input>
                <FaUser className='icon' />
                <p>{validSignUpDetails.userName}</p>
            </div>
            <div className="input-box">
                <input type='text' placeholder='Email' onChange={(e) => { handleInputChange(e, "email") }}></input>
                <MdEmail className='icon' />
                <p>{validSignUpDetails.email}</p>
            </div>
            <div className="input-box">
                <input type='password' placeholder='Password' onChange={(e) => { handleInputChange(e, "password") }}></input>
                <FaLock className='icon' id="tooltip-button" />
                <p>{validSignUpDetails.password}</p>
                <ReactTooltip anchorId="tooltip-button" className="custom-tooltip" place="top" content="Password must has at least 8 characters that include at least 1 lowercase character, 1 uppercase characters, 1 number, and 1 special character in (!@#$%^&*)." />
            </div>
            <div className="input-box">
                <input type='password' placeholder='Confirm Password' onChange={(e) => { handleInputChange(e, "confirmPassword") }}></input>
                <RiLockPasswordFill className='icon' />
                <p>{validSignUpDetails.confirmpassward}</p>
            </div>
            <button type='button' onClick={() => onLogin()} >Sign Up</button>
            <div className="register-link">
                <p>Already have an account? <Link to={"/"}>Login</Link></p>
            </div>
        </div>
    )
}

export default SignupForm