import Setting from '../Setting';

export default class ColorSettings{
    constructor() {
        this.settings = [
            new Setting('id', 'text', true, 'color-id'),
            new Setting('label', 'text', true, 'color'),
            new Setting('default', 'color'),
            new Setting('info', 'text'),
        ]
    }
}