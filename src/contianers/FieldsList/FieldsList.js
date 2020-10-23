import React from 'react';
import Field from './Field';
import { Droppable, Draggable  } from 'react-beautiful-dnd';

function FieldsList(props) {
    return (
        <div className="FieldsList">
            <h3 className="heading">Fields</h3>

            <div style={{display: 'flex'}}>
                <Droppable droppableId="droppableFieldList">
                    {(provided) => (
                        <div ref={provided.innerRef}>
                            { props.allFields && props.allFields.map( (field, index) => (
                                <Draggable key={index}
                                           draggableId={`${field}`}
                                           index={index} >
                                    { (provided) => (
                                        <div ref={provided.innerRef}
                                             {...provided.draggableProps}
                                             {...provided.dragHandleProps}>
                                            <Field field={field}  />
                                        </div>
                                    ) }
                                </Draggable>
                            ))}
                            {provided.placeholder}
                        </div>
                    )}
                </Droppable>
            </div>
        </div>
    );
}
export default FieldsList;
