import DefaultSettings from './Settings/DefaultSettings';
import TextSettings from './Settings/basic/Text';
import TextareaSettings from './Settings/basic/Textarea';
import ImagePickerSettings from './Settings/basic/ImagePicker';
import RadioSettings from './Settings/basic/Radio';
import SelectSettings from './Settings/basic/Select';
import CheckboxSettings from './Settings/basic/Checkbox';
import RangeSettings from './Settings/basic/Range';
import ColorSettings from './Settings/specialized/Color';
import FontPickerSettings from './Settings/specialized/FontPicker';
import RichTextSettings from './Settings/specialized/RichText';
import HTMLSettings from './Settings/specialized/HTML';

export default class FieldsController{
    constructor() {
        this.settingsStructures = {
            'text': () => { return new TextSettings() },
            'textarea': () => { return new TextareaSettings() },
            'image_picker': () => { return new ImagePickerSettings() },
            'radio': () => { return new RadioSettings() },
            'select': () => { return new SelectSettings() },
            'checkbox': () => { return new CheckboxSettings() },
            'range': () => { return new RangeSettings() },
            'color': () => { return new ColorSettings() },
            'font_picker': () => { return new FontPickerSettings() },
            'collection': () => { return new DefaultSettings() },
            'product': () => { return new DefaultSettings() },
            'blog': () => { return new DefaultSettings() },
            'page': () => { return new DefaultSettings() },
            'link_list': () => { return new DefaultSettings() },
            'url': () => { return new DefaultSettings() },
            'video_url': () => { return new TextareaSettings() },
            'richtext': () => { return new RichTextSettings() },
            'html': () => { return new HTMLSettings() },
            'article': () => { return new DefaultSettings() }
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
