import FieldsController from '../../model/Fields/FieldsController';

const initialState = {
    selectedFields: [],
    schema: {
        name: "Section name",
        // max_blocks: 10,
        settings: [

        ],
        blocks:[
            {
                type: 'block',
                name: "Block",
                settings: [

                ],
            }
        ],
        presets: [
            {
                name: "Section name"
            }
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
            selectedFields.push( FieldsControllerMain.getFieldByType(action.fieldType) );
            updateSchema();
            return { selectedFields: [...selectedFields], schema: {...schema} }
        case 'REMOVE_FIELD':
            selectedFields.splice(action.fieldIndex, 1);
            updateSchema();
            return { selectedFields: [...selectedFields], schema: {...schema} }
        case 'SWITCH_SELECTED_FIELDS':
            console.log('swap', action.from, action.to);
            let moveElement = selectedFields[action.from];
            let res = [];

            for (let i = 0; i < selectedFields.length; i++) {
                if( i !== action.from ){
                    if( i === action.to ){
                        res.push( moveElement );
                        res.push( selectedFields[i] );
                    }else{
                        res.push( selectedFields[i] );
                    }
                }
            }

            // if move to end
            if( selectedFields.length !== res.length ){
                res.push( moveElement );
            }

            updateSchema();
            return { selectedFields: [...res], schema: {...schema} }
        case 'UPDATE_SETTING_VALUE':
            selectedFields[action.fieldIndex].settings[action.index].setValue(action.value)
            updateSchema();
            return { selectedFields: [...selectedFields], schema: {...schema} }
        case 'UPDATE_SCHEMA':
            updateSchema();
            return { ...state, schema: {...schema}  }
        case 'SET_SCHEMA_TITLE':
            schema.name = action.schemaName;
            schema.presets[0].name = action.schemaName;
            updateSchema();
            return { ...state, schema: {...schema}  }
        default:
            return state;
    }
}
