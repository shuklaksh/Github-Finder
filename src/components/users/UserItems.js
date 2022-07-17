import { Link } from "react-router-dom"

function UserItems({user : {login, avatar_url}}) {
  return (
    <div className='card shadow-md compact side bg-base-100'>
        <div className="flex-row items-center space-x-4 card-body">
            <div className="avatar">
                <div className="rounded-full shadow w-14 h-14">
                    <img src={avatar_url} alt='Loading.....'/>
                </div>
            </div>
            <h2 className='card-title'>{login}</h2>
        </div>
        <Link className='text-base-content text-center text-opacity-40' to={`/user/${login}`}>
                Visit Profile
        </Link>
     
    </div>
  )
}

export default UserItems
