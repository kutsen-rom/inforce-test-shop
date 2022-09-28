import { useSelector } from 'react-redux';
import { Link, Outlet } from 'react-router-dom'
import { selectIsLoading } from '../../features/products/productsSlice';
import { Loading } from '../loading/Loading';
import { Footer } from '../footer/Footer';
import './navbar.css'

export const NavBar = () => {
    const isLoading = useSelector(selectIsLoading);

    return (
    <>
            <header>
                <Link to='/'> 
                    <img alt='Inforce logo' src='/images/logo.svg' className='logo' />
                </Link>
            </header>
        {isLoading ? <Loading /> : <Outlet />}
        <Footer />
    </>
    )
}