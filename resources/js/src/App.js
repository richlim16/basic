import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";

import Home from './components/Home';
import Profile from './components/Profile';
const App = () => {
    return (
        <Router className="App__container" >
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/profile" element={<Profile />} />
            </Routes>
        </Router>
    );
};

ReactDOM.render(<App />, document.getElementById('app'));