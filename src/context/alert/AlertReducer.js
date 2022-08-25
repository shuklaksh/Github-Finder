const alertReducer = (state,action) => {
    switch(action.type) {
        case 'SET_ALERT':
            return action.payload
        
        case 'removeAlert':
            return null

        default:
            return state
    }
}

export default alertReducer;