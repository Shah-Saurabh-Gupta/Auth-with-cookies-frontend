import React, { useState } from 'react'
import axios from 'axios'

function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    async function login(e) {
        e.preventDefault();
        try {
            const loginData = {
                email,
                password,
            };
            await axios.post("http://localhost:5000/auth/login", loginData);
        } catch (err) {
            console.error(err);
        }
    }

    return (
        <div>
            <h1>Log in to your Account</h1>
            <form onSubmit={login}>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit">Login</button>
            </form>
        </div>
    )
}

export default Login
