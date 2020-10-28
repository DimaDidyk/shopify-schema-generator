import React, {useRef} from 'react';
import {connect} from 'react-redux';


function SelectedFieldTemplate(props){
    const settingsRef = useRef();

    const onToggleSettings = () => {
        if (settingsRef.current.style.display === "none") {
            settingsRef.current.style.display = "block";
        } else {
            settingsRef.current.style.display = "none";
        }
    }

    return(
        <div className="field-item-wrap">
            <div className="field-item shadow">
                <div className="remove" onClick={ () => {
                    props.removeField(props.fieldIndex);
                }}>remove</div>
                <p onClick={onToggleSettings}>{props.field.type}</p>
                <div className="field-settings" ref={settingsRef} style={{display: 'none'}}>
                    { props.field.settings && props.field.settings.map( (setting, index) => {
                        return(
                            <div key={index} >
                                <label htmlFor="{setting.name}">{setting.name}</label>
                                <input
                                    key={index}
                                    name={setting.name}
                                    type={setting.type}
                                    required={setting.required}
                                    onChange={ event => {
                                        props.updateSettingValue(event.target.value, index, props.fieldIndex);
                                    }}
                                    defaultValue={setting.value}
                                    placeholder={setting.name}/>
                            </div>
                        )
                    })}
                </div>
            </div>
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
