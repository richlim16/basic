import React from 'react';
import User from './User';
const ProfileSidebar = ({ friendsList }) => {
    const renderFriends = (friendsList) => {

        if (!friendsList) {
            return (
                <span>
                    loading friends list...
                </span>
            )
        }

        else if (friendsList.length === 0) {
            return (
                <h3>lmao you have no friends</h3>
            )
        }

        else {
            return friendsList.map((friend) => (
                <User username={friend.username} />
            ))
        }
    }
    return (
        <div className="sidebar">
            <div className='list'>
                <h2 className='label'>Friends</h2>
                {renderFriends(friendsList)}
            </div>
        </div>
    );
};

export default ProfileSidebar;