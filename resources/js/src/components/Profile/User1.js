import React from 'react';
const User1 = ({ profilePhoto, username, profilestatus }) => {
    return (
        <div className="userCardBar">
            <img src={profilePhoto} />
            <span className='username'>
                {username}
            </span>
			<span className='profilestatus'>
                {profilestatus}
            </span>
        </div>
    );
};

export default User1;