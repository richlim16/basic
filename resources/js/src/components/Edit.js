import React from 'react';
import AppContainer from './AppContainer'
const Edit = () => {
    return (
        <AppContainer title="EDIT POST wowie">
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
                    <button type="button" className="btn btn-success">Save</button>
                </div>
            </form>
        </AppContainer>
    );
};

export default Edit;