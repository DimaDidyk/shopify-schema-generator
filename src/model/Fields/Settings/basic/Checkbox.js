import Setting from '../Setting';
import Field from '../../Field';

export default class CheckboxField extends Field{
    constructor() {
        super();
        this.type = 'checkbox';
        this.settings = [
            new Setting('id', 'text', true, "id"),
            new Setting('label', 'text', true, "Text"),
            new Setting('default', false),
            new Setting('info', 'text'),
        ]
    }
}
