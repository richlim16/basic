import React from 'react';
import { useEffect, useState } from 'react';
import ProfileSidebar from '../Sidebar/ProfileSidebar';
import ProfileBar from '../Profile/ProfileBar';
import Feed from '../Feed/Feed';
import api from '../../api';
const Profile = ({id}) => {
    return (
        <div>
			<ProfileBar id={id}/>
            <main id="home-body">
                <ProfileSidebar/>
                <Feed profile={id}/>
            </main>
        </div>
    );
};

export default Profile;