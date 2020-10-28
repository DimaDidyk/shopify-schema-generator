import Setting from '../Setting';

export default class FontPickerSettings{
    constructor() {
        this.settings = [
            new Setting('id', 'text', true, 'font_picker-id'),
            new Setting('label', 'text', true, 'font_picker'),
            new Setting('default', 'text', false, 'helvetica_n4'),
            new Setting('info', 'text'),
        ]
    }
}