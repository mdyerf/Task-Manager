import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
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
        if(Username === '' || Password === '' || Email === '') {
            $('#err').html('تمامی موارد باید پر بشود')
            return;
        }
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
            <input className="form-control formText" type='email' placeholder='ایمیل' onChange={onEmailChange}/>
            <input className="form-control formText" type='text' placeholder='نام کاربری' onChange={onUsernameChange}/>
            <input className="form-control formText" type='password' placeholder='کلمه ی عبور' onChange={onPasswordChange}/>
            <input className="form-control formText" type='password' placeholder='تایید کلمه ی عبور' onChange={onConfirmPasswordChange}/>
            <div className="btn btn-success submit" onClick={handleSubmit}>
                <h1 style={{'position':'absolute','top':'25%', 'left':'40%'}}>{">>>"}</h1>
            </div>
            <p id='err'></p>
        </form>
    )
}

export default LoginFrom;
