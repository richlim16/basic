import React from 'react';
import AppContainer from './AppContainer'
const Add = () => {
    return (
        <AppContainer title="ADD POST wowie">
            <form>
                <div className="form-group">
                    <label>Title</label>
                    <textarea className="form-control">
                    </textarea>
                </div>
                <div className="form-group">
                    <label>Description</label>
                    <textarea className="form-control">
                    </textarea>
                </div>
                <div className="form-group">
                    <button type="button" className="btn btn-success">ADD</button>
                </div>
            </form>
        </AppContainer>
    );
};

export default Add;