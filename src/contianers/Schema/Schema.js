import React from 'react';
import './Schema.scss';
import {connect} from 'react-redux';

const Schema = props => {
    return (
        <div className="Schema">
            <h3 className="heading">Schema</h3>
            <textarea name="schema" id="schema" cols="30" rows="10"
                value={ JSON.stringify(props.schema, null, 4) }
                onChange={ ()=> console.log('onchange') }
            />
        </div>
    );
}

const mapStateToProps = state => {
    return{
        schema: state.fields.schema
    }
}

export default connect(mapStateToProps)(Schema);
