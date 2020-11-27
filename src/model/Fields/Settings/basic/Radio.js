import Setting from '../Setting';
import Field from '../../Field';

export default class RadioField extends Field{
    constructor() {
        super();
        this.type = 'radio';
        this.settings = [
            new Setting('id', 'text', true, "test id"),
            new Setting('label', 'text', true, "label"),
            new Setting('options', 'radio', true, []),
            new Setting('default', 'text', false, "default"),
            new Setting('info', 'text', false, "test info"),
        ]
    }
}
