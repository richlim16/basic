import React from 'react';
import ProfileSidebar from '../Sidebar/ProfileSidebar';
import Feed from '../Feed/Feed';
const Profile = () => {
    return (
        <div>

            <main id="home-body">

                <ProfileSidebar />
                <Feed />
            </main>
        </div>
    );
};

export default Profile;