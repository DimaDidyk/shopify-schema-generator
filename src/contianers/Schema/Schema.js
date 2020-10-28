import React from 'react';
import './Schema.scss';
import TextField from '@material-ui/core/TextField';
import {connect} from 'react-redux';

const Schema = props => {
    return (
        <div className="Schema">
            <h3 className="heading">Schema</h3>
            <div>
                <TextField
                    label="Section Name"
                    defaultValue={props.schema.name}
                    // helperText="Some important text"
                    variant="outlined"
                    onChange={ (event)=> {
                        props.setSchemaName(event.target.value);
                    }}
                />
            </div>
            <br/>

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
