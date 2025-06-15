import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import '../css/Login.css';
import loginPicture from "../assets/images/login/login.jpg";
import googleLogo from "../assets/images/login/google.png";

const Login = () => {
    const [role, setRole] = useState("student");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    // Clear session token on mount (when opening login page)
    useEffect(() => {
        localStorage.removeItem("sessionToken");
        localStorage.removeItem("userRole");
    }, []);

    const handleLogin = () => {
        // Clear any previous sessions
        localStorage.removeItem("sessionToken");
        localStorage.removeItem("userRole");

        // Simulated credentials
        const studentCreds = email === "student" && password === "password" && role === "student";
        const recruiterCreds = email === "recruiter" && password === "password" && role === "recruiter";
        const instructorCreds = email === "instructor" && password === "password" && role === "instructor";
        if (studentCreds) {
            localStorage.setItem("sessionToken", "student_secret_123");
            localStorage.setItem("userRole", "student");
            navigate("/feed");
        } else if (recruiterCreds) {
            localStorage.setItem("sessionToken", "recruiter_secret_456");
            localStorage.setItem("userRole", "recruiter");
            navigate("/recruiter/feed");
        }else if (instructorCreds) {
            localStorage.setItem("sessionToken", "instructor_secret_678");
            localStorage.setItem("userRole", "instructor");
            navigate("/instructor"); 
        }else {
            alert("Invalid credentials");
        }
    };

    return (
        <div className="login-wrapper">
            <div className="container">
                <div className="left-section">
                    <img src={loginPicture} alt="login" />
                </div>

                <div className="right-section">
                    <div className="login-form">
                        <div className="top">
                            <h1>Login</h1>
                            <select className="role-dropdown" value={role} onChange={(e) => setRole(e.target.value)}>
                                <option value="student">Student</option>
                                <option value="recruiter">Recruiter</option>
                                <option value="instructor">Instructor</option>
                            </select>
                        </div>

                        <button className="google-btn">
                            <img src={googleLogo} alt="Google Logo" className="google-logo" />
                            Login with Google
                        </button>

                        <div className="divider">
                            <span>or</span>
                        </div>

                        <input
                            className="username"
                            type="text"
                            placeholder="Email ID"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />

                        <input
                            className="password"
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />

                        <a href="..." target="_blank" rel="noopener noreferrer">Forgot Password?</a>

                        <button className="login-btn" onClick={handleLogin}>Login</button>

                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
