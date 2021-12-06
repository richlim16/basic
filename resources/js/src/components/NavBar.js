import React from 'react';
import { Link } from 'react-router-dom';
const NavBar = () => {
    return (
        <nav>
            <Link to="#">BASIC</Link>
            <Link to="#">NEWS FEED</Link>
            <Link to="/profile">PROFILE</Link>
            <div>LOG OUT</div>
        </nav>
    );
};

export default NavBar;