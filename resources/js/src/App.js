import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import { useEffect, useState } from 'react';
import api from './api';

import Newsfeed from './components/Pages/NewsFeed';
import Profile from './components/Pages/Profile';
import NavBar from './components/NavBar';

const App = (props) => {
    const [friends, setFriends] = useState(null);

    useEffect(() => {
        api.getAllFriends(props.user_id)
            .then(res => {
                setFriends(res.data);
            })
    }, []);

    return (
        <Router className="App__container" >
            <h1>testing user id: {props.user_id}</h1>
            <NavBar />
            <Routes>
                <Route exact path="/" element={<Newsfeed id={props.user_id} friendsList={friends} />} />
                <Route path="/profile" element={<Profile friendsList={friends} />} />
            </Routes>
        </Router>
    );
};

// ReactDOM.render(<App />, document.getElementById('app'));


if (document.getElementById('app')) {
    const element = document.getElementById('app');

    const props = Object.assign({}, element.dataset);
    ReactDOM.render(<App {...props} />, element);
}
export default App;