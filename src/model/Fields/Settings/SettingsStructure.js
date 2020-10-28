import TextSettings from './basic/Text';
import TextareaSettings from './basic/Textarea';
import ImagePickerSettings from './basic/ImagePicker';

export default class SettingsStructure{
    constructor(type) {
        this.type = type;
        this.settingsStructures = {
            'default': () => { return new TextSettings() },
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
     * Get Settings Array
     * @return {[Setting, Setting, Setting, Setting, Setting]}
     */
    getSettings(){
        let settingsCreator = this.settingsStructures[this.type] || this.settingsStructures['default'];
        return settingsCreator().settings;
    }
}