/**
 *  Field
 *  @interface
 */
export default class Field{

    constructor(id, label) {
        this.type = "type";
        this.id = id;
        this.label = label;
    }

    /**
     * toSchema
     * @return {string}
     */
    toSchema(){
        throw new Error('Field should have the toSchema method');
    }
}