import React from 'react';
import ProfileSidebar from '../Sidebar/ProfileSidebar';
import ProfileBar from '../Profile/ProfileBar';
import Feed from '../Feed/Feed';
const Profile = ({ friendsList }) => {
    return (
        <div>
            <main id="home-body">
                <ProfileSidebar friendsList={friendsList} />
                <Feed />
            </main>
        </div>
    );
};

export default Profile;