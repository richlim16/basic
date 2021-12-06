import React from 'react';

const Post = ({ userID, userIMG, caption, image, dateCreated }) => {
    return (
        <div className="postCard">
            <h5 className="card-header">
                <img src={userIMG} />
                {userID} posted {dateCreated}
            </h5>
            <div className="card-body">
                {caption}
                <div>
                    <img src={image} />
                </div>
            </div>


        </div>
    );
};

export default Post;