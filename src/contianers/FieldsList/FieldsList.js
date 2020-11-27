import React from 'react';
import Field from './Field';
import {FieldsControllerMain} from '../../redux/reducers/fields';

function FieldsList() {
    return (
        <div className="FieldsList">
            <h3 className="heading">Fields</h3>
            <div className="all-field-list custom-scrollbar">
                { FieldsControllerMain && FieldsControllerMain.getAllFields().map( (field, index) => (
                    <div key={index}>
                        <Field field={field}/>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default FieldsList;