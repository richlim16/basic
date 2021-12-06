import React from 'react';
import Post from './Post';
const Feed = () => {
    return (
        <div id="posts-container">
            <Post userID="1" caption="felt cute, might send armpit pics later" userIMG="https://static.wikia.nocookie.net/virtualyoutuber/images/a/a5/Sakamata_Chloe_Portrait.png" image="https://cdn.donmai.us/sample/46/80/__sakamata_chloe_hololive_drawn_by_rykysd__sample-468047eaa541bafdd15b27ed890ffea3.jpg" dateCreated="Just Now" />
            <Post userID="1" caption="uwu" userIMG="https://static.wikia.nocookie.net/virtualyoutuber/images/a/a5/Sakamata_Chloe_Portrait.png" image="https://cdn.donmai.us/sample/6d/bb/sample-6dbb041b026da316174ff4f3b50387db.jpg" dateCreated="Two Hours Ago" />
            <Post userID="2" dateCreated="One Day Ago" />

        </div>
    );
};

export default Feed;