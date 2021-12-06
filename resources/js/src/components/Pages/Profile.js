import React from 'react';
import ProfileSidebar from '../Sidebar/ProfileSidebar';
import Feed from '../Feed/Feed';
const Profile = () => {
    return (

        <main id="home-body">
            <ProfileSidebar />
            <Feed />
        </main>
    );
};

export default Profile;