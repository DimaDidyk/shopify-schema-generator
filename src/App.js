import React from 'react';
import './App.scss';
import './Typography.scss';
import FieldsList from './contianers/FieldsList/FieldsList';
import SelectedFields from './contianers/SelectedFields/SelectedFields';
import Schema from './contianers/Schema/Schema';

export default function App() {

    function handleDragStart(e) {
        this.style.opacity = '0.4';
    }

    function handleDragEnd(e) {
        this.style.opacity = '1';
    }

    let items = document.querySelectorAll('.container .box');
    items.forEach(function(item) {
        item.addEventListener('dragstart', handleDragStart, false);
        item.addEventListener('dragend', handleDragEnd, false);
    });

    return (
        <div>

            {/*{*/}
            {/*    "type": "header",*/}
            {/*    "content": "Headings and buttons"*/}
            {/*},*/}

            {/*<div className="containewr">*/}
            {/*    <div draggable="true" className="box">A</div>*/}
            {/*    <div draggable="true" className="box">B</div>*/}
            {/*    <div draggable="true" className="box">C</div>*/}
            {/*</div>*/}

            {/*<div className="dragNdrop">*/}

            {/*    <div className="lists">*/}
            {/*        <div className="list">*/}
            {/*            <div className="list-item" style={{opacity: 1}} draggable="true">list item 1</div>*/}
            {/*            <div className="list-item" draggable="true">list item 2</div>*/}
            {/*            <div className="list-item" draggable="true">list item 3</div>*/}
            {/*        </div>*/}
            {/*        <div className="list">*/}
            {/*            <div className="list-item" draggable="true">list item</div>*/}
            {/*        </div>*/}
            {/*        <div className="list">*/}
            {/*            <div className="list-item" draggable="true">list item</div>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}

            <div className="App">
                <div className="container">
                    <div className="fields-list">
                        <FieldsList/>
                    </div>
                    <div className="selected-fields">
                        <SelectedFields/>
                    </div>
                    <div className="generated-schema">
                        <Schema/>
                    </div>
                </div>
            </div>
        </div>
    );
}
