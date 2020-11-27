import Setting from '../Setting';
import Field from '../../Field';

export default class FontPickerField extends Field{
    constructor() {
        super();
        this.type = 'font_picker';
        this.settings = [
            new Setting('id', 'text', true, 'font_picker-id'),
            new Setting('label', 'text', true, 'font_picker'),
            new Setting('default', 'text', false, 'helvetica_n4'),
            new Setting('info', 'text'),
        ]
    }
}