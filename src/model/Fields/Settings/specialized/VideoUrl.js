import Setting from '../Setting';

export default class RichTextSettings{
    constructor() {
        this.settings = [
            new Setting('id', 'text', true, 'column_richtext'),
            new Setting('label', 'text', true, 'Text'),
            new Setting('default', 'text', false, '<'),
            new Setting('info', 'text'),
        ]
    }
}