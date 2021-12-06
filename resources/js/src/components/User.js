import React from 'react';
const User = ({ profilePhoto, username }) => {
    return (
        <div className="userCard">
            <img src={profilePhoto} />
            {username}
        </div>
    );
};

export default User;