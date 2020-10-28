import Setting from '../Setting';

export default class TextSettings{
    constructor() {
        this.settings = [
            new Setting('id', 'text', true, "text-id"),
            new Setting('label', 'text', true, "label"),
            new Setting('default', 'text'),
            new Setting('info', 'text'),
            new Setting('placeholder', 'text')
        ]
    }
}
