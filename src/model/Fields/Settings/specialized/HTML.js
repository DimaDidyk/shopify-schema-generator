import Setting from '../Setting';

export default class HTMLSettings{
    constructor() {
        this.settings = [
            new Setting('id', 'text', true, 'html_area'),
            new Setting('label', 'text', true, 'Custom HTML'),
            new Setting('default', 'textarea', false, '<div><p>Some HTML content</p></div>'),
            new Setting('info', 'text'),
        ]
    }
}