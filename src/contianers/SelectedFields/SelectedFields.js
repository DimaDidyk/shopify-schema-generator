import React from 'react';
import SelectedFieldTemplate from './SelectedFieldTemplate';
import {connect} from 'react-redux';
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

function SelectedFields(props) {
    const onDragEnd = (data) => {
        // console.log(data.source.index, data.destination.index)
        props.swapFields(data.source.index, data.destination.index);
    }

    return (
        <div className="SelectedFieldsContainer">
            <h3 className="heading">Selected Fields</h3>
            <div className="SelectedFields">

                <DragDropContext onDragEnd={onDragEnd}>
                    <Droppable droppableId="droppable">
                        {(provided, snapshot) => (
                            <div
                                {...provided.droppableProps}
                                ref={provided.innerRef}>
                                { props.selectedFields && props.selectedFields.map( (field, index) => (
                                    <Draggable key={index} draggableId={String(index)} index={index}>
                                        {(provided, snapshot) => (
                                            <div
                                                ref={provided.innerRef}
                                                {...provided.draggableProps}
                                                {...provided.dragHandleProps}>
                                                <div key={index}>
                                                    <SelectedFieldTemplate
                                                        key={index}
                                                        field={field}
                                                        fieldIndex={index}/>
                                                </div>
                                            </div>
                                        )}
                                    </Draggable>
                                ))}
                                {provided.placeholder}
                            </div>
                        )}
                    </Droppable>
                </DragDropContext>
            </div>
        </div>
    );
}

const mapStateToProps = state => {
    return{
        selectedFields: state.fields.selectedFields
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        swapFields: (from, to) => dispatch({type: 'SWITCH_SELECTED_FIELDS', from, to }),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SelectedFields);
