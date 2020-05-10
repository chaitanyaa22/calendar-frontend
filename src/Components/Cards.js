import React, { Component } from 'react'
import { connect } from 'react-redux'
import {deleteCard} from '../Actions/actions'
import {bindActionCreators} from 'redux'

export class Cards extends Component {
    render() {
        return (
            <div className="card rounded border-0" style={{"backgroundImage": "linear-gradient(120deg, #fdfbfb 0%, #fdfbfb 100%)"}}>
                <div className="card-body">
                    <h5 className="card-title">{this.props.elem.title}<span className="float-right"><button className="fa fa-trash-o btn btn-sm text-muted" aria-hidden="true" onClick={()=>this.props.deleteCard(this.props.elem.date, this.props.elem.time)}></button></span></h5>
                    <h6 className="card-subtitle mb-2 text-muted"><strong>Attendees: </strong>{this.props.elem.people.join(", ")}</h6>
                    <p className="card-text"><strong>Context:</strong> {this.props.elem.info}</p>
                    <p className="card-link"><strong>Time:</strong> {this.props.elem.time}</p>
                </div>
                <div className="card-footer bg-transparent border-top-0">
                    <stron>Link: </stron>
                    <a href={`http://${this.props.elem.link}`} className="text-center">{this.props.elem.link}</a>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {

    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({deleteCard}, dispatch)

}

export default connect(mapStateToProps, mapDispatchToProps)(Cards)
