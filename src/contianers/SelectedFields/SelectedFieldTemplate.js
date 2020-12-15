import React from 'react';
import {connect} from 'react-redux';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import TextField from '@material-ui/core/TextField';
import CloseIcon from '@material-ui/icons/Close';
import {FormControlLabel} from '@material-ui/core';
import DragIndicatorIcon from '@material-ui/icons/DragIndicator';

function SelectedFieldTemplate(props){
    return(
        <div className="field-item-wrap" style={{ marginBottom: '0' }}>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    draggable="true"
                    from={props.from}
                    onDragStart={ (event) => { props.onDragStartHandle(event); }}
                    onDragEnd={ (event) => { props.onDragEndHandle(event) }}
                >

                    <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center',padding: '12px 0', margin: '-12px 0', width: '100%'}}>

                        <DragIndicatorIcon
                            style={{color: 'rgba(0, 0, 0, 0.54)', width: '18px', height: '18px'}}
                        />

                        <span>{props.field.type}</span>

                        <FormControlLabel
                            aria-label="Acknowledge"
                            onClick={(event) => event.stopPropagation()}
                            onFocus={(event) => event.stopPropagation()}
                            control={
                                <div>
                                    <CloseIcon
                                        style={{color: 'rgba(0, 0, 0, 0.54)', width: '18px', height: '18px'}}
                                        onClick={() => {
                                            props.removeField(props.fieldIndex);
                                        }}/>
                                </div>
                            }
                        />

                    </div>


                </AccordionSummary>

                <AccordionDetails style={{ flexWrap: 'wrap' }}>
                    <div style={{ width: '100%' }}>
                        { props.field.settings && props.field.settings.map( (setting, index) => {
                            return(
                                <TextField
                                    key={index}
                                    style={{
                                        width: '100%',
                                        marginTop: '10px'
                                    }}
                                    label={setting.name}
                                    onChange={event => {
                                        props.updateSettingValue(event.target.value, index, props.fieldIndex);
                                    }}/>
                            )
                        })}
                    </div>
                </AccordionDetails>
            </Accordion>
        </div>
    );
}

const mapDispatchToProps = dispatch => {
    return {
        removeField: (fieldIndex) => dispatch({type: 'REMOVE_FIELD', fieldIndex}),
        updateSettingValue: (value, index, fieldIndex) => dispatch({type: 'UPDATE_SETTING_VALUE', value, index, fieldIndex})
    }
}

export default connect(null,mapDispatchToProps)(SelectedFieldTemplate);
