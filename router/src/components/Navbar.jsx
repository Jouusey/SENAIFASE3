import { Link } from 'react-router-dom'
import "./Navbar.css"

function Navbar() {
  return (
    <div className='container-navbar' >


        <Link className='link' to="/"> Home </Link>
        <Link className='link' to="/avisos"> Avisos </Link>
        <Link className='link' to="/contato"> Contato </Link>
        <Link className='link' to="/produtos"> Produtos </Link>

    </div>
  )
}

export default Navbar