import axios from 'axios'


export const setDate = (date) => {
    return {
        type: 'set_date',
        payload: String(new Date(String(date)).toDateString())
    }
}

export const addCard = (state, date) => {
    console.log(date)
    let req = axios.post("https://calendarrrr.herokuapp.com/", {
        info: state.info,
        link: state.link,
        people: state.people.split(", "),
        date: String(new Date(String(date)).toDateString()),
        time: String(state.time),
        title: state.title
    })
    return (dispatch) => {
        req.then(res => {
            if (res.data === "error") {
                dispatch({
                    type: "error"
                })
            }
            else {
                dispatch({
                    type: 'done'
                })
            }


        })
    }
}

export const unreload = () => {
    return {
        type: 'unreload'
    }
}

export const loadCards = (date) => {
    let req = axios.get(`https://calendarrrr.herokuapp.com/${date}`)
    return (dispatch) => {
        req.then(res => {            
            dispatch({
                type: "load_cards",
                payload: res.data
            })
        })
    }

}

export const deleteCard = (date, time) => {
    let req = axios.post(`https://calendarrrr.herokuapp.com/delete`, {
        date: date,
        time: time
    })
    return (dispatch) => {
        req.then(res => {
           if(res.data === 'deleted'){
               dispatch({
                   type: 'deleted'
               })
           } 
        })
    }

}