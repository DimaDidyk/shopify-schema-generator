import Setting from '../Setting';

export default class TextareaSettings{
    constructor() {
        this.settings = [
            new Setting('id', 'text', true, "textarea-id"),
            new Setting('label', 'text', true, "textarea"),
            new Setting('default', 'textarea'),
            new Setting('info', 'text'),
            new Setting('placeholder', 'text')
        ]
    }
}