import React from 'react'
import { Link } from "react-router-dom"

function Navbar() {
    return (
        <div>
            <Link to="/">Home</Link>
            <Link to="/register">Register</Link>
            <Link to="/login">Login</Link>
            <Link to="/customer">Customer</Link>
        </div>
    )
}

export default Navbar
