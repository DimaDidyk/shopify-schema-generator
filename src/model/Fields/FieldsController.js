import TextSettings from './Settings/basic/Text';
import TextareaSettings from './Settings/basic/Textarea';
import ImagePickerSettings from './Settings/basic/ImagePicker';


export default class FieldsController{
    constructor() {
        this.settingsStructures = {
            'text': () => { return new TextSettings() },
            'textarea': () => { return new TextareaSettings() },
            'image_picker': () => { return new ImagePickerSettings() },
            'radio': () => { return new TextareaSettings() },
            'select': () => { return new TextareaSettings() },
            'checkbox': () => { return new TextareaSettings() },
            'range': () => { return new TextareaSettings() },
            'color': () => { return new TextareaSettings() },
            'font_picker': () => { return new TextareaSettings() },
            'collection': () => { return new TextareaSettings() },
            'product': () => { return new TextareaSettings() },
            'blog': () => { return new TextareaSettings() },
            'page': () => { return new TextareaSettings() },
            'link_list': () => { return new TextareaSettings() },
            'url': () => { return new TextareaSettings() },
            'video_url': () => { return new TextareaSettings() },
            'richtext': () => { return new TextareaSettings() },
            'html': () => { return new TextareaSettings() },
            'article': () => { return new TextareaSettings() }
        }
    }

    /**
     * Get All Fields
     * @return {string[]}
     */
    getAllFields(){
        return Object.keys(this.settingsStructures);
    }

    /**
     * Get Settings Array
     * @return {[Setting, Setting, Setting, Setting, Setting]}
     */
    getSettingsByFieldType(type){
        let settingsCreator = this.settingsStructures[type] || this.settingsStructures['default'];
        return settingsCreator().settings;
    }
}
