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
        case 'GET_REPOS': {
            return {
                ...state,
                repos: action.payload,
                loading: false
            };
        }
        case 'clearUsers':
            return {
                ...state,
                users: [],
            }
        case 'GetUser': 
        return {
            ...state,
            user: action.payload,
            isLoading: false
        }
        default:
            return state;
    }
}

export default githubReducer;