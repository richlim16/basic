import React from 'react';
import User from './User';
const ProfileSidebar = () => {
    return (
        <div className="sidebar">
            <div className='list'>

                <h2 className='label'>Friends</h2>
                <User profilePhoto="https://scontent.fceb4-1.fna.fbcdn.net/v/t1.6435-9/179922935_3812072485581640_6416529595137471531_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeHVe1bHDEzB7z4FS-IQ_SclFP7Z3sOkBrQU_tnew6QGtDdlV549gJT5yO-gJy3O0Zq80qJumGb5My3uRrGfZbpO&_nc_ohc=80A-IWYIWfEAX-ykyOU&_nc_ht=scontent.fceb4-1.fna&oh=213d170f622486e0c305cfbc83d0df6d&oe=61D4B6B7" username="Richlim16" />
                <User profilePhoto="https://avatars.githubusercontent.com/u/54580181?v=4" username="R-ayaay" />
            </div>
        </div>
    );
};

export default ProfileSidebar;