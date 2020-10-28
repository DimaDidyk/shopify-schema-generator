import Setting from './Settings/Setting';
import SettingsStructure from './Settings/SettingsStructure';

/**
 *  Field
 */
export default class Field{

    /**
     *
     * @param type {string}
     * @param settings {Array<Setting>}
     */
    constructor(type, settings) {
        this.type = type;
        // let settings = SettingsStructure[type] || SettingsStructure['default'];
        this.settings = settings;
        this.additionalSettings = [];
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