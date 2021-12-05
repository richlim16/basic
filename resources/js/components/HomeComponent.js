import React from 'react';
import ReactDOM from 'react-dom';

function Example() {
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header">Home Component</div>

                        <div className="card-body">I'm the Home component!</div>
                        <div className="card-body">Please design my raymond uwu</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Example;

if (document.getElementById('homecomponent')) {
    ReactDOM.render(<Example />, document.getElementById('homecomponent'));
}
