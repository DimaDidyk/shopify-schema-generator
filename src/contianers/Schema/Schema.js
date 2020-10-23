import React from 'react';
import './Schema.scss';

function Schema() {
    return (
        <div className="Schema">
            <h3 className="heading">Schema</h3>

            <textarea name="schema" id="schema" cols="30" rows="10"
                defaultValue={
`{% schema %}
{
    "name": "section name",
    "max_blocks": 4,
    "settings": [
    
    ]
    "blocks": [
        {
            "type": "link_list",
            "name": "Menu",
            "settings": [
                {
                
                }
            ]
        }
    ]
}
{% endschema %}`
                }
            />
        </div>
    );
}

export default Schema;
