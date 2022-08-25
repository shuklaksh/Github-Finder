const githubReducer = (state,action) => {
    switch(action.type) {
        case 'GetUsers':
            return {
                ...state,
                users: action.payload,
                isLoading: false,
            }
        case 'setLoading':
            return {
                ...state,
                isLoading: true
            }
        case 'clearUsers':
            return {
                ...state,
                users: [],
            }
        default:
            return state;
    }
}

export default githubReducer;