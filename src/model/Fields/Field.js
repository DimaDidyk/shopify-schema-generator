import Setting from './Setting';

/**
 *  Field
 */
export default class Field{

    constructor(type) {
        this.type = type;
        this.settings = [
            new Setting('id', 'text', true),
            new Setting('label', 'text', true),
            new Setting('default', 'text'),
            new Setting('info', 'text'),
            new Setting('placeholder', 'text')
        ];
        this.additionalSettings = [];
    }

    /**
     * toSchema
     * @return {string}
     */
    toSchema(){
        throw new Error('Field should have the toSchema method');
    }
}