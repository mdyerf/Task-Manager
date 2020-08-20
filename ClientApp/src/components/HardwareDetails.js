import React from 'react';

import './style.css';

function HardwareDetails({data}) {
    return (
        <div className="container details">
            <h5>نسخه ی سیستم عامل (ویندوز) : {data.windowsVersion}</h5>
            <h5>پردازنده : {data.cpuName}</h5>
            <h6>پردازنده نوع {data.cpuModel}</h6>
            <h5>ظرفیت حافظه (RAM) : {data.ramStorage}</h5>
            <h5>مدل حافظه (RAM) : {data.ramModel}</h5>
            <h5>فضای خالی دیسک سخت (Hard Disk Drive) : {data.hddStorage}</h5>
        </div>
    )
}

export default HardwareDetails;
