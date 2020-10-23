import React, {useState} from 'react';
import './App.scss';
import './Typography.scss';
import FieldsList from './contianers/FieldsList/FieldsList';
import SelectedFields from './contianers/SelectedFields/SelectedFields';
import Schema from './contianers/Schema/Schema';
import {DragDropContext} from 'react-beautiful-dnd';
import {allFields} from './model/allFields';

export default function App() {

    const [selectedFields, setSelectedFields] = useState([]);

    const onDragEnd = (result) => {
        if( result.destination != null ){
            let updatedSelectedFields = [...selectedFields];
            let selectedElementIndex = result.source.index;
            let newIndex = result.destination.index;

            if( result.source.droppableId === "droppableFieldList" && result.destination.droppableId === "droppableSelectedFields" ){
                updatedSelectedFields.splice(newIndex, 0, result.draggableId);
            }
            if( result.source.droppableId === "droppableSelectedFields" ) {
                let element = selectedFields[selectedElementIndex];
                updatedSelectedFields.splice(selectedElementIndex, 1);
                updatedSelectedFields.splice(newIndex, 0, element);
            }
            setSelectedFields(updatedSelectedFields);
        }
    }

    return (
        <div className="App">
            <div className="container">
                <DragDropContext onDragEnd={onDragEnd}>
                    <div className="col col-3">
                        <div className="fields-list">
                            <FieldsList allFields={allFields} />
                        </div>
                    </div>
                    <div className="col col-3">
                        <div className="selected-fields">
                            <SelectedFields  selectedFields={selectedFields} />
                        </div>
                    </div>
                </DragDropContext>
                <div className="col col-3">
                    <div className="generated-schema">
                        <Schema/>
                    </div>
                </div>
            </div>
        </div>
    );
}
