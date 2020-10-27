import Field from '../../model/Fields/Field';

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
    selectedFields: []
}

export default function (state= initialState, action){
    switch (action.type) {
        case 'ADD_FIELD':
            state.selectedFields.push(new Field(action.value));
            return { ...state }
        default:
            return state;
    }
}