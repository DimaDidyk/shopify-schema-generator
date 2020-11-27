import Setting from '../Setting';
import Field from '../../Field';

export default class TextField extends Field{
    constructor() {
        super();
        this.type = 'text';
        this.settings = [
            new Setting('id', 'text', true, "text-id"),
            new Setting('label', 'text', true, "label"),
            new Setting('default', 'text'),
            new Setting('info', 'text'),
            new Setting('placeholder', 'text')
        ]
    }
}
