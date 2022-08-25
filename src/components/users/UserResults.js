import {useContext } from 'react'
import ReactLoading from 'react-loading';
import UserItems from './UserItems';
import GithubContext from '../../context/github/GithubContext';



function UserResults() {
    const{users, isLoading} = useContext(GithubContext);

    

    
    if(!isLoading) {
        return (
            <div className='grid grid-col-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md: grid-cols-2'>
              { users.map((user) => {
                return <UserItems key={user.id} user = {user}/>
              })
              }
            </div>
          )
    } else{
        return (<ReactLoading type='cylon' height='5rem' width='8rem' />)
    }
    
}

export default UserResults
