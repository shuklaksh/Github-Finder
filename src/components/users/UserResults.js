import { useEffect, useState } from 'react'
import Spinner from '../layouts/Spinner';
import UserItems from './UserItems';


function UserResults() {
    const[users,setUser] = useState([]);
    const[isLoading,setIsLoading] = useState([true]);
  
    useEffect(() => {
        fetchUsers();
    }, [])

    const fetchUsers = async () => {
        const response = await fetch(`${process.env.REACT_APP_GITHUB_URL}/users` ,{
            headers:{
                "Content-Type": 'application/json',
                "Accept": 'application/json',
                "Authorization": `token ${process.env.REACT_APP_GITHUB_TOKEN}`,
            }
        })
        const data = await response.json();
        setUser(data);
        setIsLoading(false);
        }
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
        return (<Spinner />)
    }
    
}

export default UserResults
