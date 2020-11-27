import React from 'react';
/**
 * Setting
 */
export default class Setting{
    static TYPE_TEXT = 'text';
    static TYPE_TEXTAREA = 'textarea';
    static TYPE_NUMBER = 'number';
    /**
     * @param name {string}
     * @param type {string}
     * @param required {boolean}
     */
    constructor(name, type = Setting.TYPE_TEXT, required = false, value = "") {
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