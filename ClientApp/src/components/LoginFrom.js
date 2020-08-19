import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
import CheckIcon from '@material-ui/icons/Check';
import axios from 'axios';
import $ from 'jquery';
import {storeAndDecode} from '../AuthCore';

import './style.css';

const LoginFrom = (props) => {

    const [Username, setUsername] = useState('');
    const [Password, setPassword] = useState('');
    const history = useHistory();

    function handleSubmit() {
        axios.post('api/Auth/login', {
            Username: Username, 
            Password: Password
        })
            .then(res => {
                storeAndDecode(res.data.token);
                history.push('/task');
            })
            .catch(err => {
                $('#err').html('نام کاربری یافت نشد!')
            });
    }
    function onUsernameChange(eve) {
        setUsername(eve.target.value)
    }
    function onPasswordChange(eve) {
        setPassword(eve.target.value)
    }
    return (
        <form>
            <input className="formText" type='text' placeholder='نام کاربری' onChange={onUsernameChange}/><br/>
            <input className="formText" type='password' placeholder='کلمه ی عبور' onChange={onPasswordChange}/><br/>
            <div className="btn btn-success submit" onClick={handleSubmit}>
                <h1 style={{'position':'absolute','top':'25%', 'left':'40%'}}>{">>>"}</h1>
            </div>
            <p id='err'></p>
        </form>
    )
}

export default LoginFrom;
