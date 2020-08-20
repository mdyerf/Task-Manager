import React, {useState, useEffect} from 'react'
import axios from 'axios';
import {useHistory} from 'react-router-dom';
import {isAuthed, getUserId} from '../AuthCore';
import LogOff from './LogOff';
import DownloadApp from './DownloadApp';
import HardwareDetails from './HardwareDetails.js';

const Task = (props) =>  {

    const [Info, setInfo] = useState({});
    const history = useHistory();
    
    if(!isAuthed()) history.push('/');

    useEffect(() => {

        const id = getUserId();

        axios.get(`api/Info/Get/${id}`)
        .then(res => {
            setInfo(res.data)
        })

    }, [])

    return (
        <>
            {
                Info === '' &&
                <DownloadApp />
            }
            {
                Info !== '' &&
                <HardwareDetails data={Info} />
            }
            <LogOff />
        </>
    )
}

export default Task
