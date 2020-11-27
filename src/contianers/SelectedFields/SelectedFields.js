import React from 'react';
import SelectedFieldTemplate from './SelectedFieldTemplate';
import {connect} from 'react-redux';


function SelectedFields(props) {
    const onDragEnd = (data) => {
        // console.log(data.source.index, data.destination.index)
        props.swapFields(data.source.index, data.destination.index);
    }

    return (
        <div className="SelectedFieldsContainer" style={{
            display: 'flex',
            flexDirection: 'column',
            height: '100vh'
        }}>
            <h3 className="heading">Selected Fields</h3>
            <div className="SelectedFields custom-scrollbar" style={{
                flex: 'auto',
                overflowY: 'auto',
                paddingBottom: '30px',
                paddingRight: '25px'
            }}>
                { props.selectedFields && props.selectedFields.map( (field, index) => (
                    <SelectedFieldTemplate
                        key={index}
                        field={field}
                        fieldIndex={index}/>
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

const mapDispatchToProps = (dispatch) => {
    return {
        swapFields: (from, to) => dispatch({type: 'SWITCH_SELECTED_FIELDS', from, to }),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SelectedFields);
