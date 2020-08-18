import jwt_decode from 'jwt-decode';
import axios from "axios";
export function isAuthed() {
    const isLog = !!localStorage.getItem('token');
    if(!isLog) axios.get('api/Auth/logout');
    return isLog;
}
export function getUserId() {
    const token = localStorage.getItem('token');

    if(token) 
        return jwt_decode(token).nameid;
    else return null;
}
export function storeAndDecode(token) {
    localStorage.setItem('token', token);
    return jwt_decode(token);
}