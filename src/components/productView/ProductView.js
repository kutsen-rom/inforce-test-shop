import './product-view.css'
import { useParams } from 'react-router-dom'
import { selectProducts } from '../../features/products/productsSlice';
import { useSelector } from 'react-redux';
import { Modal } from '../modal/Modal';

export const ProductView = ({ setModal, modal }) => {
    const products = useSelector(selectProducts);
    const params = useParams();
    const id = parseInt(params.id);
    const product = products.filter(product => product.id === id)
    return (
        <div className='product-view'>
            <div className='product-view-container'>
                <img alt={product[0].name} height='500px' src={product[0].imageUrl} />
                <div className='product-details'>
                    <h2>{product[0].name}</h2>
                    <h3>Count: {product[0].count}</h3>
                    <h3>Height: {product[0].size.height}mm</h3>
                    <h3>Width: {product[0].size.width}mm</h3>
                    <h3>Weight: {product[0].weight}</h3>
                    <div onClick={() => setModal('modal-edit-product')} className='product-view-edit-button'>Edit</div>
                </div>
            </div>
            <Modal id={id} setModal={setModal} modal={modal} />
        </div>
    )
}