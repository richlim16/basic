import React from 'react';
import { Link } from 'react-router-dom';
import NewsFeedSidebar from '../Sidebar/NewsFeedSidebar';
import Feed from '../Feed/Feed';
const NewsFeed = () => {
    return (
        <main id="home-body">
            <NewsFeedSidebar />
            <Feed />
        </main>
    );
};

export default NewsFeed;