import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import Navbar from './components/layouts/Navbar';

function Router() {
    return <BrowserRouter>
        <Navbar />
        <Switch>
            <Route exact path="/">
                <div>Home</div>
            </Route>
            <Route path="/register">
                <Register />
            </Route>
            <Route path="/login">
                <Login />
            </Route>
            <Route path="/customer">
                <div>Customers</div>
            </Route>
        </Switch>
    </BrowserRouter>
}

export default Router
