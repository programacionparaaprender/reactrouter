

const counterReducer = (state = 0, action) => {

    switch (action.type) {
        case "INCREMENT":
                console.log('increment');
                state = state + 1
            return  state 
        case "DECREMENT":
                state = state - 1
                console.log('decrement');
            return state 
        default:
            return state
    }

}

export default counterReducer