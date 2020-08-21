import React from 'react';

import './style.css';

function DownloadApp() {
    return (
        <div className="container home" >
            <p className="text" >اطلاعاتی از سیستم شما در دیتابیس موجود نیست</p>
            <p className="text" >برای ارسال اطلاعات سیستم برنامه ی زیر را دانلود و اجرا کنید</p>

            <a href=' http://s000.tinyupload.com/?file_id=65505557202777597474'
               target='_blank' >
                دریافت برنامه
            </a>
            <p className="text">پس از اجرای برنامه صفحه را refresh کنید</p>
        </div>
    )
}

export default DownloadApp;
