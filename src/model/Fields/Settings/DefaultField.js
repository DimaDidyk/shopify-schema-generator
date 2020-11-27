import Setting from './Setting';
import Field from '../Field';

export default class DefaultField extends Field{
    constructor( type ) {
        super();
        this.type = type;
        this.settings = [
            new Setting('id', 'text', true, `${type}-id`),
            new Setting('label', 'text', true, 'label'),
            new Setting('info', 'text'),
        ]
    }
}



