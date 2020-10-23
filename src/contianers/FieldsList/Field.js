import React from 'react';

export default function Field(props){
    return(
        <div className="field-item-wrap">
            <div className="field-item">{props.field}</div>
        </div>
    );
}