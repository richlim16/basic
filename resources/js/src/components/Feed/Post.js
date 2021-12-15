import React from 'react';

const Post = ({ userID, userIMG, caption, image, dateCreated }) => {
    const hasImage = image;
    return (
        <div className="postCard">
            <h5 className="card-header">
                <img src={userIMG} />
                {userID} posted {dateCreated}
            </h5>
            <div className="card-body">
                <div>
                    {caption}
                </div>

                {hasImage ? (
                    <div>
                        <img src={image} />
                    </div>
                ) : null}


            </div>

            <div className='card-footer'>
                Place your comment here!
            </div>

        </div>
    );
};

export default Post;