import React, {useRef} from 'react';

export default function SelectedFieldTemplate(props){

    const settingsRef = useRef();

    const onToggleSettings = () => {
        console.log('change');
        if (settingsRef.current.style.display === "none") {
            settingsRef.current.style.display = "block";
        } else {
            settingsRef.current.style.display = "none";
        }
    }

    return(
        <div className="field-item-wrap">
            <div className="field-item">
                <p onClick={onToggleSettings}>{props.field.type}</p>
                <div className="field-settings" ref={settingsRef}>
                    { props.field.settings && props.field.settings.map( (setting, index) => {
                        return(
                            <div key={index*2}>
                                {setting.value}
                                <input
                                    key={index}
                                    name={setting.name}
                                    type={setting.type}
                                    required={setting.required}
                                    onChange={ event => {setting.setValue(event.target.value)} }
                                    defaultValue={'null'}
                                    placeholder={setting.name}/>
                            </div>
                        )
                    } ) }
                </div>
            </div>
        </div>
    );
}

