import React from 'react';
import Post from './Post';
import api from '../../api';
import { useEffect, useState } from 'react';

const Feed = ({ id }) => {
    const [posts, setPosts] = useState(null);

    useEffect(() => {
        api.getAllPosts(id)
            .then(res => {
                setPosts(res.data[0]);
                // console.log(res.data[0]);
            })
    }, []);




    const renderPosts = () => {
        if (!posts) {
            return (
                <h1>Loading Posts...</h1>
            )
        }
        if (posts.length === 0) {
            return (
                <h1>No Posts To Load</h1>
            );
        }

        else {
            return posts.map((post) => (
                <Post userID={post.user_id} caption={post.caption} dateCreated={post.created_at} />
            ))
        }
    }


    return (
        <div id="posts-container">
            {renderPosts()}
            <Post userID="1" caption="felt cute, might send armpit pics later" userIMG="https://static.wikia.nocookie.net/virtualyoutuber/images/a/a5/Sakamata_Chloe_Portrait.png" image="https://cdn.donmai.us/sample/46/80/__sakamata_chloe_hololive_drawn_by_rykysd__sample-468047eaa541bafdd15b27ed890ffea3.jpg" dateCreated="Just Now" />
            <Post userID="1" caption="uwu" userIMG="https://static.wikia.nocookie.net/virtualyoutuber/images/a/a5/Sakamata_Chloe_Portrait.png" image="https://cdn.donmai.us/sample/6d/bb/sample-6dbb041b026da316174ff4f3b50387db.jpg" dateCreated="Two Hours Ago" />
        </div>
    );
};

export default Feed;