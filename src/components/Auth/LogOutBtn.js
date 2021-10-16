import React, { useContext } from 'react'
import AuthContext from '../../context/AuthContext';
import axios from 'axios';
import { useHistory } from 'react-router';

function LogOutBtn() {

    const { getLoggedIn } = useContext(AuthContext);
    const history = useHistory();

    async function logout() {
        await axios.get("http://localhost:5000/auth/logout");
        await getLoggedIn();
        history.push("/");
    }

    return (
        <button onClick={logout}>
            Log Out
        </button>
    )
}

export default LogOutBtn
