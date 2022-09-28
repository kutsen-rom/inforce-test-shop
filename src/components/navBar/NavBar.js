import { Link } from 'react-router-dom'
import './navbar.css'

export const NavBar = () => {
    return (
        <header>
            <Link to='/'> 
                <img src='/images/logo.svg' className='logo' />
            </Link>
        </header>
    )
}