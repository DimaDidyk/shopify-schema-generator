import Setting from '../Setting';
import Field from '../../Field';

export default class SelectField extends Field{
    constructor() {
        super();
        this.type = 'select';
        this.settings = [
            new Setting('id', 'text', true, "id"),
            new Setting('label', 'text', true, "Text"),
            new Setting('options', 'select', true, []),
            new Setting('default', 'text'),
            new Setting('info', 'text'),
        ]
    }
}
