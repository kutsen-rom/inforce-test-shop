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
    {console.log(isLoading)}
            <header>
                <Link to='/'> 
                    <img src='/images/logo.svg' className='logo' />
                </Link>
            </header>
        {isLoading ? <Loading /> : <Outlet />}
        <Footer />
    </>
    )
}