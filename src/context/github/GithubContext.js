import {createContext, useReducer} from 'react';
import githubReducer from './GithubReducer';

const GithubContext = createContext();

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;

export const GithubProvider = ({children}) => {
    const intialState = {
        users:[],
        isLoading: false
    }

    const [state,dispatch] = useReducer(githubReducer,intialState)

    const setLoading = () => {
        dispatch({
            type: 'setLoading'
        })
    }

    //search users
    const searchUsers = async (text) => {
        setLoading();

        const params = new URLSearchParams({
            q: text
        })
        const response = await fetch(`${GITHUB_URL}/search/users?${params}` ,{
            headers:{
                "Content-Type": 'application/json',
                "Accept": 'application/json',
            }
        })
        const {items} = await response.json();
        
        dispatch({
            type: 'GetUsers',
            payload: items
        })
    }

    const clearUsers = () => dispatch({type: 'clearUsers'})
    
        return (
            <GithubContext.Provider value={{
                users: state.users,
                isLoading: state.isLoading,
                searchUsers,
                clearUsers
            }}>
                {children}
            </GithubContext.Provider>
        )
}

export default GithubContext;