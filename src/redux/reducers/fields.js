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
    switch (action.type) {
        case 'ADD_FIELD':
            let settings = FieldsControllerMain.getSettingsByFieldType(action.fieldType);
            state.selectedFields.push( new Field(action.fieldType, settings ));
            return { ...state, selectedFields: [...state.selectedFields] }
        case 'REMOVE_FIELD':
            selectedFields.splice(action.fieldIndex, 1);
            return { ...state, selectedFields: [...selectedFields] }
        case 'SWITCH_SELECTED_FIELDS':
            let selectedFieldsTemp = [...state.selectedFields];
            return { ...state, selectedFields: [...selectedFieldsTemp] }
        case 'UPDATE_SETTING_VALUE':
            selectedFields[action.fieldIndex].settings[action.index].setValue(action.value)
            return { ...state, selectedFields: [...selectedFields] }
        case 'UPDATE_SCHEMA':
            let schema = state.schema;
            schema.settings = [];
            for (let field of state.selectedFields) {
                schema.settings.push( field.getSettingsForJSON() );
            }
            return { ...state, schema: {...schema}  }
        default:
            return state;
    }
}
