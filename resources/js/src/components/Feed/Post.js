import React from 'react';
import api from '../../api';

const Post = ({ userID, userIMG, caption, image, dateCreated, friendsList }) => {


    const hasImage = image;

    function getUserByID(array, ID) {
        return array.find((element) => {
            return element.id === ID;
        })
    }
    function getUsername() {

        if (friendsList) {
            const user = getUserByID(friendsList, userID);
            return user.username;
        }
    }

    return (
        <div className="postCard">
            <h5 className="card-header">
                <img src={userIMG} />

                <span>
                    {getUsername()} posted {dateCreated}
                </span>


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