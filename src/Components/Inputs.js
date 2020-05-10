import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addCard } from '../Actions/actions'
import { bindActionCreators } from 'redux'


class Inputs extends Component {
    state = {
        date: "",
        time: "12:00",
        title: "",
        link: "",
        people: "",
        info: ""
    }

    buttonClick = () => {
        this.props.addCard(this.state, this.props.date)
        this.setState({
            date: "",
            time: "12:00",
            title: "",
            link: "",
            people: "",
            info: ""
        })
    }

    render() {
        return (
            <div className="mt-3">
                <input className="form-control border-0 bg-transparent m-1" value={this.state.time} onChange={(e) => this.setState({ time: e.target.value })} type="time" />
                <input className="form-control border-0 bg-transparent m-1" value={this.state.title} onChange={(e) => this.setState({ title: e.target.value })} type="text" placeholder="Title" />
                <input className="form-control border-0 bg-transparent m-1" value={this.state.link} onChange={(e) => this.setState({ link: e.target.value })} type="text" placeholder="Link" />
                <input className="form-control border-0 bg-transparent m-1" value={this.state.people} onChange={(e) => this.setState({ people: e.target.value })} placeholder="Attendees (Separate with a comma)" />
                <input className="form-control border-0 bg-transparent m-1" rows="3" value={this.state.info} onChange={(e) => this.setState({ info: e.target.value })} type="text" placeholder="Context"></input>
                <button className="btn btn-sm btn-primary m-1 w-100" onClick={() => this.buttonClick()}>Add</button>

            </div>
        )
    }
}

const getState = (state) => {
    return {
        date: state.date

    }
}
const changeState = (dispatch) => {
    return bindActionCreators({ addCard }, dispatch)
}


export default connect(getState, changeState)(Inputs)
