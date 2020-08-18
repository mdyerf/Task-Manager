import React from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

function LogOff() {

    const history = useHistory();
    
    function logOff() {
        localStorage.removeItem('token');
        axios.get('api/Auth/logout')
        history.push('/');
    }

    return (
        <div>
            <button onClick={logOff}>خروج</button>
        </div>
    )
}

export default LogOff;
