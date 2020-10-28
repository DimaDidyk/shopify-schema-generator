export default class SchemaGenerator{
    /**
     * @param fields {Array<Field>}
     */
    constructor(fields= []) {
        this.fields = fields;
    }

    /**
     * Generate Schema
     * @return {string}
     */
    generateSchema(){
        return `{% schema %}
        {
            "name": "section name",
            "max_blocks": 4,
            "settings": [
                
            ]
        }
        {% endschema %}`;
    }
}