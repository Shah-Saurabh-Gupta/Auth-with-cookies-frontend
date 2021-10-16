import React, { useContext } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import Customers from './components/customers/Customers';
import Navbar from './components/layouts/Navbar';
import AuthContext from './context/AuthContext';

function Router() {

    const { loggedIn } = useContext(AuthContext);

    return <BrowserRouter>
        <Navbar />
        <Switch>
            <Route exact path="/">
                <div>Home</div>
            </Route>
            {loggedIn === false && (
                <>
                    <Route path="/register">
                        <Register />
                    </Route>
                    <Route path="/login">
                        <Login />
                    </Route>
                </>
            )}
            {loggedIn === true && (
                <>
                    <Route path="/customer">
                        <Customers />
                    </Route>
                </>
            )}
        </Switch>
    </BrowserRouter>
}

export default Router
