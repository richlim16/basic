import React from 'react';
const User = ({ profilePhoto, username }) => {
    return (
        <div className="userCard">
            <img src={profilePhoto} />
            <span className='username'>
                {username}
            </span>
        </div>
    );
};

export default User;