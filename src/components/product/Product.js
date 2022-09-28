import './product.css'

export const Product = ({ product }) => {
    return (
        <div className='product'>
            <h2>{product.name}</h2>
        </div>
    )
}