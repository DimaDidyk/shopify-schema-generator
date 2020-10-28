import React from 'react';
import './Schema.scss';
import {connect} from 'react-redux';

const Schema = props => {
    return (
        <div className="Schema">
            <h3 className="heading">Schema</h3>
            <div>
                <label htmlFor="section-title">Section Title</label>
                <input type="text" name="section-title" onChange={ (event)=> {
                    props.setSchemaName(event.target.value);
                }}/>
            </div>
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

const mapDispatchToProps = dispatch => {
    return {
        setSchemaName: (schemaName) => dispatch({type: 'SET_SCHEMA_TITLE', schemaName})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Schema);
