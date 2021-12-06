import React from 'react';
import ProfileSidebar from '../Sidebar/ProfileSidebar';
import ProfileBar from '../Profile/ProfileBar';
import Feed from '../Feed/Feed';
const Profile = () => {
    return (

        <main id="home-body">
			<ProfileBar />
            <ProfileSidebar />
            <Feed />
        </main>
    );
};

export default Profile;