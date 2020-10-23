import React from 'react';
import {Draggable, Droppable} from 'react-beautiful-dnd';
import Field from '../FieldsList/Field';

function SelectedFields(props) {
    return (
        <div className="SelectedFieldsContainer">
            <h3 className="heading">Selected Fields</h3>

            <div className="SelectedFields">
                <Droppable
                    droppableId="droppableSelectedFields">
                    {(provided) => (
                        <div ref={provided.innerRef}>
                            { props.selectedFields && props.selectedFields.map( (field, index) => (
                                <Draggable key={index}
                                           draggableId={`droppableSelectedFields-${index}`}
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

export default SelectedFields;
