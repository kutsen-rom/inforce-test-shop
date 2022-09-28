import { useState } from 'react'
import { Link } from 'react-router-dom'
import './product.css'

export const Product = ({ product, setModal }) => {
    const [hover, setHover] = useState('unhover')

    return (
        <Link 
            onMouseEnter={() => setHover('hover')} 
            onMouseLeave={() => setHover('unhover')} 
            to={product.id} 
            className={`product `}>
            <img max-width='100%' height='250px' src={product.imageUrl} />
            <h2>{product.name}</h2>
            <div className={`product-buttons ${hover}`}>
                <div onClick={() => setModal('modal-edit-product')} className='product-button edit-button'>Edit</div> 
                <div className='product-button delete-button'>Delete</div>  
            </div>
            
        </Link>
    )
}