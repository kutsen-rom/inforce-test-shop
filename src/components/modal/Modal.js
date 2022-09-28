import { useState } from 'react'
import './modal.css'
import { selectProducts } from '../../features/products/productsSlice';
import { useDispatch, useSelector } from 'react-redux';
import { addProduct } from '../../features/products/productsSlice';

export const Modal = ({ setModal, modal }) => {
    const dispatch = useDispatch();
    const [newProduct, setNewProduct] = useState({});

    const products = useSelector(selectProducts);


    const handleChange = ({ target }) => {
        setNewProduct({
            ...newProduct,
            [target.name]: target.value
        })
    }

    const handleEdit = () => {
        
    }

    const handleAdd = () => {
        if (!newProduct.name || !newProduct.count) {
            return
        }
        const id = products.length + 1;
        setNewProduct({
            ...newProduct,
            id: id
        })
        
        const postOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newProduct)
        }
        dispatch(addProduct(postOptions))
        setNewProduct({
            name: '',
            imageUrl: '',
            count: '',
            weight: '',
            height: '',
            width: ''
        });
        setTimeout(() => {
            setModal('modal-hide')
        }, 1000)
    }

    return (
        <div className={modal}>
            <div className='modal'>
                <h2>Add product</h2>
                <form className='modal-add-product-form'>
                    <p>Product name</p>
                    <input 
                        name='name'
                        value={newProduct.name}
                        onChange={handleChange}
                        required                        
                        placeholder='Apple iPhone 14 256GB'>
                        </input>
                    <p>Image URL</p>
                    <input 
                        name='imageUrl'
                        value={newProduct.imageUrl}
                        onChange={handleChange}
                        required
                        placeholder='https://i.moyo.ua/55aec978-af5b-4da3-9655-8ddd8460efaf/https://img.moyo.ua/img/products/5236/72_4000.jpg/w_600,h_600,r_inside,imdt'>
                    </input>
                    <p>count</p>
                    <input 
                        name='count'
                        value={newProduct.count}
                        onChange={handleChange}
                        required
                        placeholder='2'>
                    </input>
                    <p>width</p>
                    <input 
                        name='width'
                        value={newProduct.width}
                        onChange={handleChange}
                        required
                        placeholder='71.5'>
                    </input>
                    <p>height</p>
                    <input 
                        name='height'
                        value={newProduct.height}
                        onChange={handleChange}
                        required
                        placeholder='146.7'>
                    </input>
                    <p>weight</p>
                    <input 
                        name='weight'
                        value={newProduct.weight}
                        onChange={handleChange}
                        required
                        placeholder='172g'>
                    </input>
                    <div className='modal-buttons'>
                        {modal === 'modal-add-product'
                            ?   <div onClick={handleAdd} className='modal-button modal-add-button'>Add</div>
                            :  <div onClick={handleEdit} className='modal-button modal-edit-button'>Edit</div>
                            }
                        
                        <div className='modal-button modal-cancel-button'onClick={() => setModal('modal-hide')}>Cancel</div>
                    </div>
                    
                </form>
            </div>
        </div>
    )
}