import React from 'react';
import SelectedFieldTemplate from './SelectedFieldTemplate';
import {connect} from 'react-redux';

function SelectedFields(props) {
    return (
        <div className="SelectedFieldsContainer">
            <h3 className="heading">Selected Fields</h3>

            <div className="SelectedFields">
                { props.selectedFields && props.selectedFields.map( (field, index) => (
                    <SelectedFieldTemplate key={index} field={field}  />
                ))}
            </div>
        </div>
    );
}

const mapStateToProps = state => {
    return{
        selectedFields: state.fields.selectedFields
    }
}

export default connect(mapStateToProps)(SelectedFields);
