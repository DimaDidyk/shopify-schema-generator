import Setting from '../Setting';

export default class RichTextSettings{
    constructor() {
        this.settings = [
            new Setting('id', 'text', true, 'column_richtext'),
            new Setting('label', 'text', true, 'Text'),
            new Setting('default', 'textarea', false, '<p>Default <em>richtext</em> <a href="https://example.com">content</a></p>'),
            new Setting('info', 'text'),
        ]
    }
}