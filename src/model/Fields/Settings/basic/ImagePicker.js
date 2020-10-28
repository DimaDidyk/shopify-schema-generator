import Setting from '../Setting';

export default class ImagePickerSettings{
    constructor() {
        this.settings = [
            new Setting('id', 'text', true, "image-id"),
            new Setting('label', 'text', true, "image"),
            new Setting('default', 'textarea'),
            new Setting('info', 'text'),
        ]
    }
}
