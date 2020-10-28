import Setting from '../Setting';

export default class CheckboxSettings{
    constructor() {
        this.settings = [
            new Setting('id', 'text', true, "id"),
            new Setting('label', 'text', true, "Text"),
            new Setting('default', false),
            new Setting('info', 'text'),
        ]
    }
}
