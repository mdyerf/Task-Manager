import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
import CheckIcon from '@material-ui/icons/Check';
import axios from 'axios';
import $ from 'jquery';
import {storeAndDecode} from '../AuthCore';

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
            <input type='text' placeholder='نام کاربری' onChange={onUsernameChange}/>
            <input type='password' placeholder='کلمه ی عبور' onChange={onPasswordChange}/>
            <CheckIcon onClick={handleSubmit}/>
            <p id='err'></p>
        </form>
    )
}

export default LoginFrom;
