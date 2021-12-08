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
const App = (props) => {
    return (
        <Router className="App__container" >
            <h1>testing user id: {props.user_id}</h1>
            <NavBar />
            <Routes>
                <Route exact path="/" element={<Newsfeed />} />
                <Route path="/profile" element={<Profile />} />
            </Routes>
        </Router>
    );
};

// ReactDOM.render(<App />, document.getElementById('app'));

export default App;

if (document.getElementById('app')) {
    const element = document.getElementById('app');

    const props = Object.assign({}, element.dataset);
    ReactDOM.render(<App {...props}/>, element);
}