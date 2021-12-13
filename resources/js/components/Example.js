import React, {useState} from 'react';
import ReactDOM from 'react-dom';

function Example(props) {


    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header">Example Component</div>

                        <div className="card-body">I'm an example component!</div>
                        <h1>user_id: {props.user_id}</h1>
                        <button class="logoutBtn">
                        <a href="/logout">Logout</a>
                    </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Example;

if (document.getElementById('app')) {
    const element = document.getElementById('app');

    const props = Object.assign({}, element.dataset);
    ReactDOM.render(<Example {...props}/>, element);
}
