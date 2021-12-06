import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";

import Newsfeed from './components/Pages/NewsFeed';
import Profile from './components/Pages/Profile';
import NavBar from './components/NavBar';
const App = () => {
    return (
        <Router className="App__container" >
            <NavBar />
            <Routes>
                <Route exact path="/" element={<Newsfeed />} />
                <Route path="/profile" element={<Profile />} />
            </Routes>
        </Router>
    );
};

ReactDOM.render(<App />, document.getElementById('app'));