import React from 'react';
/**
 * Setting
 */
export default class Setting{
    /**
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
     * set setting Value
     * @param value {string}
     */
    setValue(value){
        this.value = value;
        return true;
    }

}