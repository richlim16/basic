import React from 'react';
import { Link } from 'react-router-dom';
const NavBar = () => {
    return (
        <nav>
            <span>BASIC</span>
            <Link to="/">NEWS FEED</Link>
            <Link to="/profile">PROFILE</Link>
            <a href="/logout">LOGOUT</a>
        </nav>
    );
};

export default NavBar;