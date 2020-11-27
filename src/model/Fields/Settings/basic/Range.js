import Setting from '../Setting';
import Field from '../../Field';

export default class RangeField extends Field{
    constructor() {
        super();
        this.type = 'range';
        this.settings = [
            new Setting('id', 'text', true, "id"),
            new Setting('label', 'text', true, "Text"),
            new Setting('min', Setting.TYPE_NUMBER, true, 0),
            new Setting('max', 'number', true, 0),
            new Setting('step', 'number', true, 0),
            new Setting('unit', 'text'),
            new Setting('default', 'text'),
            new Setting('info', 'text'),
        ]
    }
}
