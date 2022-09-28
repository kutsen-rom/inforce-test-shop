import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Modal } from '../../components/modal/Modal'
import { Product } from '../../components/product/Product'
import './products.css'
import { selectProducts } from './productsSlice'

export const Products = ({ setModal, modal }) => {
    const products = useSelector(selectProducts);
    
    const [id, setId] = useState(0);
    return (
        <div className='products'>
            <div className='products-container'>
            <div onClick={() => setModal('modal-add-product')} className='add-product'>
                <p className='plus'>+</p>
                <p className='button-text'>Add product</p> 
            </div>
                {products.map(product => {
                    return <Product setId={setId} setModal={setModal} product={product} key={product.id} />
                })}
            </div>
            <Modal id={id} setModal={setModal} modal={modal} />
        </div>
    )
}