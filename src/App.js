import React from 'react';
import './App.scss';
import './Typography.scss';
import FieldsList from './contianers/FieldsList/FieldsList';
import SelectedFields from './contianers/SelectedFields/SelectedFields';
import Schema from './contianers/Schema/Schema';

export default function App() {
    return (
        <div>
            <div className="App">
                <div className="container">
                    <div className="col col-3">
                        <div className="fields-list">
                            <FieldsList/>
                        </div>
                    </div>
                    <div className="col col-3">
                        <div className="selected-fields">
                            <SelectedFields/>
                        </div>
                    </div>
                    <div className="col col-3">
                        <div className="generated-schema">
                            <Schema/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
