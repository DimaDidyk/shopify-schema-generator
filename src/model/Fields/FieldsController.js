import DefaultField from './Settings/DefaultField';
import TextField from './Settings/basic/Text';
import HTMLField from './Settings/specialized/HTML';
import ImagePickerField from './Settings/basic/ImagePicker';
import RichTextField from './Settings/specialized/RichText';
import VideoUrlField from './Settings/specialized/VideoUrl';
import TextareaField from './Settings/basic/Textarea';
import RangeField from './Settings/basic/Range';
import ColorField from './Settings/specialized/Color';
import FontPickerField from './Settings/specialized/FontPicker';
import CheckboxField from './Settings/basic/Checkbox';
import RadioField from './Settings/basic/Radio';
import SelectField from './Settings/basic/Select';

export default class FieldsController{
    constructor() {
        this.settingsStructures = {
            'text': () => { return new TextField() },
            'textarea': () => { return new TextareaField() },
            'image_picker': () => { return new ImagePickerField() },
            'radio': () => { return new RadioField() },
            'select': () => { return new SelectField() },
            'checkbox': () => { return new CheckboxField() },
            'range': () => { return new RangeField() },
            'color': () => { return new ColorField() },
            'font_picker': () => { return new FontPickerField() },
            'collection': () => { return new DefaultField('collection') },
            'product': () => { return new DefaultField('product') },
            'blog': () => { return new DefaultField('blog') },
            'page': () => { return new DefaultField('page') },
            'link_list': () => { return new DefaultField('link_list') },
            'url': () => { return new DefaultField('url') },
            'video_url': () => { return new VideoUrlField() },
            'richtext': () => { return new RichTextField() },
            'html': () => { return new HTMLField() },
            'article': () => { return new DefaultField('article') }
        }
    }

    /**
     *
     * @param type
     * @return {Field}
     */
    getFieldByType(type){
        return this.settingsStructures[type]();
    }

    /**
     * Get All Fields
     * @return {string[]}
     */
    getAllFields(){
        return Object.keys(this.settingsStructures);
    }

}
