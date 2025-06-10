import { Link } from 'react-router-dom'
import logo from '../../assets/logo/web-app-manifest-192x192.png'
import './Nav.css'

function Nav() {
  return (
    <div className='nav'>
      <Link to="/"><img src={logo} alt="Website Logo"/></Link>
    </div>
  )
}

export default Nav