import React, { useState } from "react";
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export const Login = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [loggedIn, setLoggedIn] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email); // Handle form submission logic here
        setLoggedIn(true); // Set the login state to true
    }

    return (
        <div className="auth-form-container">
            <h2>Login</h2>
            <form className="login-form" onSubmit={handleSubmit}>
                <label htmlFor="email">Email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" id="email" name="email" />
                <label htmlFor="password">Password</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
                <button type="submit">Log In</button>
            </form>
            <button className="link-btn" onClick={() => props.onFormSwitch('register')}>Don't have an account? Register here.</button>
            {loggedIn && (
                <>
                    <div className="App2">
                        <NavBar />
                        <Banner />
                        <Skills />
                        <Projects />
                        <Contact />
                        <Footer />
                    </div>
                </>
            )}
        </div>
    )
}
