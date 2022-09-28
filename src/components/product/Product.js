import { useState } from 'react'
import { Link } from 'react-router-dom'
import './product.css'

export const Product = ({ product, setModal, setId }) => {
    const [hover, setHover] = useState('unhover')

    return (
        <Link 
            onMouseEnter={() => setHover('hover')} 
            onMouseLeave={() => setHover('unhover')} 
            to={`${product.id}`} 
            className={`product `}>
            <img alt={product.name} max-width='100%' height='250px' src={product.imageUrl} />
            <h2>{product.name}</h2>
            <div className={`product-buttons ${hover}`}>
                <Link className='link' onClick={(e) => e.preventDefault()} >
                    <div onClick={() => {setModal('modal-delete-product'); setId(product.id)}} className='product-button delete-button'>Delete</div>  
                </Link>
            </div>
            
            
        </Link>
    )
}