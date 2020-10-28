import Field from '../../model/Fields/Field';
import FieldsController from '../../model/Fields/FieldsController';

const initialState = {
    selectedFields: [],
    schema: {
        name: "Section name",
        max_blocks: 10,
        settings: [

        ],
        blocks:[

        ]
    }
}

export const FieldsControllerMain = new FieldsController();
export default function (state= initialState, action){
    let selectedFields = [...state.selectedFields];
    let schema = state.schema;
    const updateSchema = () => {
        schema.settings = [];
        for (let field of selectedFields) {
            schema.settings.push( field.getSettingsForJSON() );
        }
    }

    switch (action.type) {
        case 'ADD_FIELD':
            let settings = FieldsControllerMain.getSettingsByFieldType(action.fieldType);
            selectedFields.push( new Field(action.fieldType, settings ));
            updateSchema();
            return { selectedFields: [...selectedFields], schema: {...schema} }
        case 'REMOVE_FIELD':
            selectedFields.splice(action.fieldIndex, 1);
            updateSchema();
            return { selectedFields: [...selectedFields], schema: {...schema} }
        case 'SWITCH_SELECTED_FIELDS':
            return { selectedFields: [...selectedFields], schema: {...schema} }
        case 'UPDATE_SETTING_VALUE':
            selectedFields[action.fieldIndex].settings[action.index].setValue(action.value)
            updateSchema();
            return { selectedFields: [...selectedFields], schema: {...schema} }
        case 'UPDATE_SCHEMA':
            updateSchema();
            return { ...state, schema: {...schema}  }
        case 'SET_SCHEMA_TITLE':
            schema.name = action.schemaName;
            updateSchema();
            return { ...state, schema: {...schema}  }
        default:
            return state;
    }
}
