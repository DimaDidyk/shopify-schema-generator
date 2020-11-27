import Setting from '../Setting';
import Field from '../../Field';

export default class ColorField extends Field{
    constructor() {
        super();
        this.type = 'color';
        this.settings = [
            new Setting('id', 'text', true, 'color-id'),
            new Setting('label', 'text', true, 'color'),
            new Setting('default', 'color'),
            new Setting('info', 'text'),
        ]
    }
}