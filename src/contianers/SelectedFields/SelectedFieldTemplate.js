import React, {useRef} from 'react';
import {connect} from 'react-redux';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import TextField from '@material-ui/core/TextField';

function SelectedFieldTemplate(props){
    return(
        <div className="field-item-wrap">

            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <span>{props.field.type}</span>
                </AccordionSummary>
                <AccordionDetails>
                    <div>
                        <div className="remove" onClick={ () => {
                            props.removeField(props.fieldIndex);
                        }}>remove</div>

                        { props.field.settings && props.field.settings.map( (setting, index) => {
                            return(
                                <div key={index}>
                                    <TextField
                                        label={setting.name}
                                        onChange={event => {
                                            props.updateSettingValue(event.target.value, index, props.fieldIndex);
                                        }} />
                                </div>
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
