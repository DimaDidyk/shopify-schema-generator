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
                    <div className="fields-list custom-scrollbar">
                        <FieldsList/>
                    </div>
                    <div className="selected-fields custom-scrollbar">
                        <SelectedFields/>
                    </div>
                    <div className="generated-schema custom-scrollbar">
                        <Schema/>
                    </div>
                </div>
            </div>
        </div>
    );
}
