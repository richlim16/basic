import React from 'react';
import { Link } from 'react-router-dom';
import NewsFeedSidebar from '../Sidebar/NewsFeedSidebar';
import Feed from '../Feed/Feed';

const NewsFeed = ({ id, friendsList }) => {

    return (
        <main id="home-body">
            <NewsFeedSidebar friendsList={friendsList} />
            <Feed id={id} />
        </main>
    );
};

export default NewsFeed;