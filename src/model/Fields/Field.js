/**
 *  Field
 */
export default class Field{

    constructor() {
        /**
         *
         * @type {Setting[]}
         */
        this.settings = [];
    }

    getIdField(){
        for (const setting of this.settings) {
            if( setting.name === 'id' ){
                return setting.value;
            }
        }
    }

    /**
     * toSchema
     * @return {object}
     */
    getSettingsForJSON(){
        let settingsToSchema = {type: this.type};
        for (let setting of this.settings) {
            if( setting.value !== "" ){
                settingsToSchema[setting.name] = setting.value;
            }
            if( setting.required && setting.value === "" ){
                settingsToSchema[setting.name] = "FIELD IS REQUIRED";
            }
        }
        return settingsToSchema;
    }
}