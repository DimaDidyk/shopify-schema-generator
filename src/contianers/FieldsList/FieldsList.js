import React from 'react';
import Field from './Field';
import {connect} from 'react-redux';

function FieldsList(props) {
    return (
        <div className="FieldsList">
            <h3 className="heading">Fields</h3>
            <div className="all-field-list">
                { props.allFields && props.allFields.map( (field, index) => (
                    <div
                        key={index}
                        onClick={ () => props.addField(field) }>
                        <Field field={field}/>
                    </div>
                ))}
            </div>
        </div>
    );
}

const mapStateToProps = state => {
    return{
        allFields: state.fields.allFields
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addField: (fieldHandle) => dispatch({type: 'ADD_FIELD', fieldHandle})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FieldsList);
