import Setting from '../Setting';

export default class RangeSettings{
    constructor() {
        this.settings = [
            new Setting('id', 'text', true, "id"),
            new Setting('label', 'text', true, "Text"),
            new Setting('min', 'number', true, 0),
            new Setting('max', 'number', true, 0),
            new Setting('step', 'number', true, 0),
            new Setting('unit', 'text'),
            new Setting('default', 'text'),
            new Setting('info', 'text'),
        ]
    }
}
