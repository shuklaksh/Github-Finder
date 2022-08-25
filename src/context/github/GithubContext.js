import {createContext, useReducer} from 'react';
import githubReducer from './GithubReducer';

const GithubContext = createContext();

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;

export const GithubProvider = ({children}) => {
    const intialState = {
        users:[],
        user:{},
        repos: [],
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

    //single user
    const getUser = async (login) => {
        setLoading();

        const response = await fetch(`${GITHUB_URL}/users/${login}` ,{
            headers:{
                "Content-Type": 'application/json',
                "Accept": 'application/json',
            }
        })
        if(response.status === 404) {
            window.location = '/notfound'
        } else{
            const data = await response.json();
            dispatch({
                type: 'GetUser',
                payload: data
            })
        }
        
        
        
    }
    const getUserRepos = async (username) => {
        setLoading();
    
        const res = await fetch(
          `https://api.github.com/users/${username}/repos`
        );
    
        dispatch({
          type: 'GET_REPOS',
          payload: res.data
        });
      };

    const clearUsers = () => dispatch({type: 'clearUsers'})
    
        return (
            <GithubContext.Provider value={{
                users: state.users,
                user: state.user,
                isLoading: state.isLoading,
                searchUsers,
                clearUsers,
                getUser,
                getUserRepos,
                repos: state.repos,
            }}>
                {children}
            </GithubContext.Provider>
        )
}

export default GithubContext;