import Setting from './Setting';

/**
 *  Field
 */
export default class Field{

    constructor(type) {
        this.type = type;
        this.settings = [
            new Setting('id', 'text', true, "test id"),
            new Setting('label', 'text', true, "label"),
            new Setting('default', 'text', false, "default"),
            new Setting('info', 'text', false, "test info"),
            new Setting('placeholder', 'text', false, "placeholder")
        ];
        this.additionalSettings = [];
    }

    /**
     * toSchema
     * @return {object}
     */
    getSettingsForJSON(){
        let settings = {};
        for (let setting of this.settings) {
            settings[setting.name] = setting.value;
        }
        return settings;
    }
}