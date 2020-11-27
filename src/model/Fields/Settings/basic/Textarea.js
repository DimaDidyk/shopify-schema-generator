import Setting from '../Setting';
import Field from '../../Field';

export default class TextareaField extends Field{
    constructor() {
        super();
        this.type = 'textarea';
        this.settings = [
            new Setting('id', 'text', true, "textarea-id"),
            new Setting('label', 'text', true, "textarea"),
            new Setting('default', 'textarea'),
            new Setting('info', 'text'),
            new Setting('placeholder', 'text')
        ]
    }
}