import Setting from '../Setting';
import Field from '../../Field';

export default class HTMLField extends Field{
    constructor() {
        super();
        this.type = 'html';
        this.settings = [
            new Setting('id', 'text', true, 'html_area'),
            new Setting('label', 'text', true, 'Custom HTML'),
            new Setting('default', 'textarea', false, '<div><p>Some HTML content</p></div>'),
            new Setting('info', 'text'),
        ]
    }
}