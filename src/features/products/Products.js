import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Product } from '../../components/product/Product'
import './products.css'
import { selectProducts } from './productsSlice'

export const Products = () => {
    const products = useSelector(selectProducts);
    console.log(products)
    return (
        <div className='products'>
        <div className='products-container'>
        <div className='add-product'>
            <p className='plus'>+</p>
            <p className='button-text'>Add product</p> 
        </div>
            {products.map(product => {
                return <Product product={product} key={product.id} />
            })}
        </div>
        </div>
    )
}