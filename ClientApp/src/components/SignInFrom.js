import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
import CheckIcon from '@material-ui/icons/Check';
import axios from 'axios';
import $ from 'jquery';
import {storeAndDecode} from '../AuthCore';

const LoginFrom = (props) => {

    const [Username, setUsername] = useState('');
    const [Password, setPassword] = useState('');
    const [Email, setEmail] = useState('');
    const [ConfirmPass, setConfirmPass] = useState('');
    const history = useHistory();

    function handleSubmit() {
        if(ConfirmPass === Password)
            axios.post('api/Auth/register', {
                Username: Username,
                Password: Password,
                Email: Email
            })
            .then(res => {
                storeAndDecode(res.data.token)
                history.push('/task');
            })
            .catch(err => {
                $('#err').html('خطایی در ثبت رخ داده است')
            });
        else
        $('#err').html('مطابقت ندارد')
    }
    function onUsernameChange(eve) {
        setUsername(eve.target.value)
    }
    function onPasswordChange(eve) {
        setPassword(eve.target.value)
    }
    function onEmailChange(eve) {
        setEmail(eve.target.value)
    }
    function onConfirmPasswordChange(eve) {
        setConfirmPass(eve.target.value)
    }
    return (
        <form>
            <input type='email' placeholder='ایمیل' onChange={onEmailChange}/>
            <input type='text' placeholder='نام کاربری' onChange={onUsernameChange}/>
            <input type='password' placeholder='کلمه ی عبور' onChange={onPasswordChange}/>
            <input type='password' placeholder='تایید کلمه ی عبور' onChange={onConfirmPasswordChange}/>
            <CheckIcon onClick={handleSubmit}/>
            <p id='err'></p>
        </form>
    )
}

export default LoginFrom;
