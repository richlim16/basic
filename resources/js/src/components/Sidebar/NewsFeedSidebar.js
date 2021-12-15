import React from 'react';
import User from './User';
const NewsFeedSidebar = () => {
    return (
        <div className="sidebar">
            <div className='list'>

                <h2 className='label'>Friends</h2>
                <User profilePhoto="https://scontent.fceb4-1.fna.fbcdn.net/v/t1.6435-9/179922935_3812072485581640_6416529595137471531_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeHVe1bHDEzB7z4FS-IQ_SclFP7Z3sOkBrQU_tnew6QGtDdlV549gJT5yO-gJy3O0Zq80qJumGb5My3uRrGfZbpO&_nc_ohc=80A-IWYIWfEAX-ykyOU&_nc_ht=scontent.fceb4-1.fna&oh=213d170f622486e0c305cfbc83d0df6d&oe=61D4B6B7" username="Richlim16" />
                <User profilePhoto="https://avatars.githubusercontent.com/u/54580181?v=4" username="R-ayaay" />
            </div>
            <div className='list'>
                <h2 className='label'>People you may know</h2>
                <User profilePhoto="https://scontent.fceb4-1.fna.fbcdn.net/v/t1.6435-9/108020072_2749426005161890_7560618786899569698_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=e3f864&_nc_eui2=AeFhhSaqlOhMHnHSYLu4p-TL6T3OK0mZ51PpPc4rSZnnU_IyOZTZV-dJzcLilYCe0to9daqY2ShnbHHHqmgBJ1f9&_nc_ohc=0w6Qw3GwFe8AX9HZ-dn&_nc_ht=scontent.fceb4-1.fna&oh=9a8646a3b1107e324106ec9f95afb7cf&oe=61D3F795" username="CapsLock" />
                <User profilePhoto="https://scontent.fceb4-1.fna.fbcdn.net/v/t1.6435-9/78779126_3797999070217551_1284373411107176448_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeFRBTTJq98neJN2l3ydyQbOrf_5o1h1Haut__mjWHUdq_LiN89xiiuGe6WMvlOImdvws1h0bInQLeRgSLdbZlm7&_nc_ohc=Rys-2gtCmYcAX9M69PH&_nc_ht=scontent.fceb4-1.fna&oh=a8c2954e83dc21a20e152bb40f5c2aa7&oe=61D24DC4" username="Chongbjorn" />
            </div>
        </div>
    );
};

export default NewsFeedSidebar;