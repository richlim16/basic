import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";

import Home from './components/Home';
import Add from './components/Add';
import Edit from './components/Edit';
const App = () => {
    return (
        <Router className="App__container" >
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/add" element={<Add />} />
                <Route path="/edit/:id" element={<Edit />} />
            </Routes>
        </Router>
    );
};

ReactDOM.render(<App />, document.getElementById('app'));