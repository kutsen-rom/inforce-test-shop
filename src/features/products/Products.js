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
            <h1>PRODUCTS</h1>
            {products.map(product => {
                return <Product product={product} key={product.id} />
            })}
        </div>
    )
}