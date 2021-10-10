import React, { useState } from 'react'
import axios from 'axios'

function Register() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordVerify, setPasswordVerify] = useState("");

    async function register(e) {
        e.preventDefault();
        try {
            const registerData = {
                email,
                password,
                passwordVerify,
            };
            await axios.post("http://localhost:5000/auth/", registerData);
        } catch (err) {
            console.error(err);
        }
    }

    return (
        <div>
            <h1>Register a new Account</h1>
            <form onSubmit={register}>
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
                <input
                    type="password"
                    placeholder="Verify your Password"
                    value={passwordVerify}
                    onChange={(e) => setPasswordVerify(e.target.value)}
                />
                <button type="submit">Register</button>
            </form>
        </div>
    )
}

export default Register
