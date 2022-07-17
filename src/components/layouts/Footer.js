import {FaSlackHash} from 'react-icons/fa'
const year = new Date().getFullYear();

function Footer() {
  return (
    <footer className='footer p-10 bg-gray-700 text-primary-content footer-center'>
      <div>
        <FaSlackHash className='text-3xl'/>
        <p>Copyright &copy;  {year}</p>
      </div>
    </footer>
  )
}

export default Footer
