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
    const [id, setId] = useState(props.user_id);

    useEffect(() => {
        api.getAllFriends(props.user_id)
            .then(res => {
                setFriends(res.data);
            })
    }, []);
    
    const renderFriends = () => {
        if (!friends) {
            return (
                <tr>
                    <td>loading friends list...</td>
                </tr>
            )
        }

        else if (friends.length === 0) {
            return (
                <tr>
                    <td>No Friends... lmao</td>
                </tr>
            )
        }

        else {
            return friends.map((friend) => (
                <tr>
                    <td>id : {friend.id}</td>
                    <td>name : {friend.username}</td>
                </tr>
            ))
        }
    }

    return (
        <Router className="App__container" >
            <h1>testing user id: {props.user_id}</h1>
            <table>
                <tbody>
                    {renderFriends()}
                </tbody>
            </table>
            <NavBar />
            <Routes>
                <Route exact path="/" element={<Newsfeed id={props.user_id} />} />
                <Route path="/profile" element={<Profile id={id}/>} />
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