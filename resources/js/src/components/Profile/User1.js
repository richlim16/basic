import React from 'react';
const User1 = ({ profilePhoto, username }) => {
    return (
        <div className="userCardBar">
            <img src={profilePhoto} />
            {username}
        </div>
    );
};

export default User1;