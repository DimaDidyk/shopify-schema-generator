import Field from '../../model/Fields/Field';
import SettingsStructure from '../../model/Fields/Settings/SettingsStructure';

const initialState = {
    allFields: [
        'text',
        'textarea',
        'image_picker',
        'radio',
        'select',
        'checkbox',
        'range',
        'color',
        'font_picker',
        'collection',
        'product',
        'blog',
        'page',
        'link_list',
        'url',
        'video_url',
        'richtext',
        'html',
        'article'
    ],
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

export default function (state= initialState, action){
    switch (action.type) {
        case 'ADD_FIELD':
            let settings = new SettingsStructure(action.fieldHandle);
            state.selectedFields.push(new Field(action.fieldHandle, settings.getSettings()));
            return { ...state, selectedFields: [...state.selectedFields] }
        case 'SWITCH_SELECTED_FIELDS':
            let selectedFieldsTemp = [...state.selectedFields];
            return { ...state, selectedFields: [...selectedFieldsTemp] }
        case 'UPDATE_SETTING_VALUE':
            let selectedFields = [...state.selectedFields];
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
