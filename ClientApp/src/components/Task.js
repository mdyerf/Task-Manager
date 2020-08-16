import React from 'react'
import axios from 'axios';
import {useHistory} from 'react-router-dom';
import {isAuthed} from '../AuthCore';

const Task = (props) =>  {

    const history = useHistory();
    
    if(!isAuthed()) history.push('/');

    function logOff() {
        localStorage.removeItem('token');
        axios.get('api/Auth/logout')
        history.push('/');
    }

    return (
        <div>
            HI it's TASK
            <button onClick={logOff}>خروج</button>
        </div>
    )
}

export default Task
