import React from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

import './style.css';

function LogOff() {

    const history = useHistory();
    
    function logOff() {
        localStorage.removeItem('token');
        axios.get('api/Auth/logout')
        history.push('/');
    }

    return (
        <div>
            <button className="btn btn-danger submit" onClick={logOff}>{'<<<'}</button>
        </div>
    )
}

export default LogOff;
