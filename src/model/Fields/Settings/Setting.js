/**
 * Setting
 */
export default class Setting{
    /**
     *
     * @param name {string}
     * @param type {string}
     * @param required {boolean}
     */
    constructor(name, type = 'text', required = false, value = "") {
        this.name = name;
        this.type = type;
        this.required = required;
        this.value = value;
    }

    /**
     * set Value
     * @param value {string}
     */
    setValue(value){
        this.value = value;
        return true;
    }

    /**
     * get Setting Value
     * @return {null|string}
     */
    getValue(){
        return this.value;
    }
}