import React, { Component } from 'react'
import Calendar from './Components/Calendar'
import Inputs from './Components/Inputs'
import Cards from './Components/Cards'
import Header from './Components/Header'
import { connect } from 'react-redux'
import { loadCards, unreload } from './Actions/actions'
import { bindActionCreators } from 'redux'


class App extends Component {

  componentDidMount = () => {
    this.props.loadCards(this.props.date)
    this.props.unreload()
  }
  componentDidUpdate = (prevProps, prevState) => {
    if (prevProps.date !== this.props.date) {
      this.componentDidMount()
    }

    if (this.props.reload) {
      this.componentDidMount()
    }

    if (this.props.error != preProps.error && this.props.error == true) {
      alert("Time Already Scheduled")
    }

  }
  render() {
    return (
      <div className="">
        <Header />
        <div className="col">
          <div className="row">
            <div className="col-3">
              <Calendar />
              <Inputs />
            </div>
            <div className="col-9 mt-3">
              <div className="card-columns">
                {this.props.cards.map((e, i) => {
                  return <div key={i} className="mb-2">
                    <Cards elem={e} index={i} />
                  </div>
                })}
              </div>
            </div>
          </div>
        </div>
      </div>


    )
  }
}


const getState = (state) => {
  return {
    date: state.date,
    cards: state.cards,
    reload: state.reload,
    error: state.error

  }
}
const changeState = (dispatch) => {
  return bindActionCreators({ loadCards, unreload }, dispatch)
}


export default connect(getState, changeState)(App)




