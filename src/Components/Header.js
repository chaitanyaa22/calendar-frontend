import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-light" style={{"backgroundColor": "#2471A3"}}>
                    <span className="navbar-brand text-light">
                    <i className="fa fa-calendar-check-o" aria-hidden="true"></i> Calendar
                    </span>
                </nav>
            </div>
        )
    }
}
