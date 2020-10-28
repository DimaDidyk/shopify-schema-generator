import Setting from './Setting';

export default class DefaultSettings{
    constructor() {
        this.settings = [
            new Setting('id', 'text', true, 'page-id'),
            new Setting('label', 'text', true, 'page'),
            new Setting('info', 'text'),
        ]
    }
}