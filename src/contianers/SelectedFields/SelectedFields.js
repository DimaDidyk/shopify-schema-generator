import React from 'react';
import SelectedFieldTemplate from './SelectedFieldTemplate';
import {connect} from 'react-redux';

class SelectedFields extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            from: 0
        }
    }

    /**
     * @param from {number}
     * @param to {number}
     */
    canBeMoved( from, to){
        let toNext = to - 1;
        return this.from !== to && this.from !== toNext;
    }

    onDragStartHandle(event){
        event.target.style.opacity = 1;
        let newFrom = Number( event.target.getAttribute('from') );
        this.setState(  {
            from: newFrom
        });
    }

    onDragEnterHandle(event){
        event.target.style.opacity = 1;

        let to = Number( event.target.getAttribute('to') );
        if( this.canBeMoved(this.state.from, to) ){
            if ( event.target.className === "dropZone" ) {
                event.target.style.height = '50px';
            }
        }
    }
    onDragLeaveHandle(event){
        event.target.style.opacity = 1;

        if ( event.target.className === "dropZone" ) {
            event.target.style.height = "20px";
        }
    }
    onDragEndHandle(event){
        event.target.style.opacity = 1;
        if ( event.target.className === "dropZone" ) {
            event.target.style.height = '20px';
        }
    }

    ondropHandle(event){
        event.target.style.opacity = 1;

        event.preventDefault();
        let to = Number( event.target.getAttribute('to') );
        event.target.style.background = "";
        if( this.canBeMoved(this.state.from, to) ){
            this.props.swapFields(this.state.from, to);
        }
    }

    onDragOverHandle = function (event) {
        event.preventDefault();
    }

    render() {
        return(
            <div className="SelectedFieldsContainer" style={{
                display: 'flex',
                flexDirection: 'column',
                height: '100vh'
            }}>
                <h3 className="heading" onClick={()=> this.forceUpdate()}>Selected Fields</h3>
                <div className="SelectedFields custom-scrollbar" style={{
                    flex: 'auto',
                    overflowY: 'auto',
                    paddingBottom: '30px',
                    paddingRight: '25px'
                }}>
                    <div className="dropZone"
                         style={this.styles.dropZone}
                         to={0}
                         onDragOver={(event) => {
                             this.onDragOverHandle(event)
                         }}
                         onDragEnter={(event) => {
                             this.onDragEnterHandle(event)
                         }}
                         onDragLeave={(event) => {
                             this.onDragLeaveHandle(event)
                         }}
                         onDrop={(event) => {
                             this.onDragEndHandle(event);
                             this.ondropHandle(event)
                         }}/>

                    { this.props.selectedFields && this.props.selectedFields.map( (field, index) => (
                        <div style={{width: '100%'}} key={index} className={'drag-wrapper'}>

                            <SelectedFieldTemplate
                                from={index}
                                onDragStartHandle={ this.onDragStartHandle.bind(this) }
                                onDragEndHandle={ this.onDragEndHandle.bind(this) }

                                field={field}
                                fieldIndex={index}/>

                            <div className="dropZone"
                                 style={this.styles.dropZone}
                                 to={1+index}
                                 onDragOver={(event) => {
                                     this.onDragOverHandle(event)
                                 }}
                                 onDragEnter={(event) => {
                                     this.onDragEnterHandle(event)
                                 }}
                                 onDragLeave={(event) => {
                                     this.onDragLeaveHandle(event)
                                 }}
                                 onDrop={(event) => {
                                     this.onDragEndHandle(event);
                                     this.ondropHandle(event)
                                 }}/>
                        </div>
                    ))}
                </div>
            </div>
        )
    }

    styles = {
        dropZone: {
            display: 'block',
            width: '100%',
            height: '20px',
            border: '1px dashed #bbb',
            transition: 'all .3s'
        }
    }

}


const mapStateToProps = state => {
    return{
        selectedFields: state.fields.selectedFields
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        swapFields: (from, to) => dispatch({type: 'SWITCH_SELECTED_FIELDS', from, to }),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SelectedFields);
