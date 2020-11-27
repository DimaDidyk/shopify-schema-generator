import Setting from '../Setting';
import Field from '../../Field';

export default class ImagePickerField extends Field{
    constructor() {
        super();
        this.type = 'image_picker';
        this.settings = [
            new Setting('id', 'text', true, "image-id"),
            new Setting('label', 'text', true, "image"),
            new Setting('default', 'textarea'),
            new Setting('info', 'text'),
        ]
    }
}
