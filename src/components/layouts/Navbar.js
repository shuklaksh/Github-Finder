import { FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom';
function Navbar({title}) {
  return (
    <nav className='navbar mb-12 shadow-lg bg-neutral text-neutral-content'>
        <div className="container mx-auto">
            
            <FaGithub className='inline pr-2 text-3xl' />
            <Link to='/' className='text-lg font-bold align-middle' >
                {title}
            </Link>

        </div>
        
        <div className="flex-1 px-10 mx-10">
            
            <div className="flex justify-end ">
                <Link to='/' className='btn btn-ghost btn-sm rounded-btn text-base'>
                    Home
                </Link>
                <Link to='/about' className='btn btn-ghost btn-sm rounded-btn text-base'>
                    About
                </Link>
            </div>
            
        </div>
      
    </nav>
  )
}

Navbar.defaultProps = {
    title: 'Github Finder'
}

export default Navbar
