import Setting from '../Setting';

export default class SelectSettings{
    constructor() {
        this.settings = [
            new Setting('id', 'text', true, "id"),
            new Setting('label', 'text', true, "Text"),
            new Setting('options', 'select', true, []),
            new Setting('default', 'text'),
            new Setting('info', 'text'),
        ]
    }
}
