import React from 'react';
import {connect} from 'react-redux';

function Field(props){
    return(
        <div className="field-item-wrap">
            <div className="field-item shadow"
                 onClick={ () => {
                     props.addField(props.field);
                     props.updateSchema();
                 }}>{props.field}</div>
        </div>
    );
}


const mapDispatchToProps = (dispatch) => {
    return {
        addField: (fieldType) => dispatch({type: 'ADD_FIELD', fieldType}),
        updateSchema: () => dispatch({type: 'UPDATE_SCHEMA'})
    }
}

export default connect(null, mapDispatchToProps)(Field);