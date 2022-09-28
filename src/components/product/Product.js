import { Link } from 'react-router-dom'
import './product.css'

export const Product = ({ product }) => {
    console.log(product.id)
    return (
        <Link to={product.id} className='product'>
            <img max-width='100%' height='250px' src={product.imageUrl} />
            <h2>{product.name}</h2>
        </Link>
    )
}