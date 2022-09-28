import { useState } from 'react'
import './modal.css'
import { editProducts, selectProducts, setProducts } from '../../features/products/productsSlice';
import { useDispatch, useSelector } from 'react-redux';
import { addProduct, deleteProduct, setIsLoading } from '../../features/products/productsSlice';

export const Modal = ({ setModal, modal, id }) => {
    const dispatch = useDispatch();
    const [newProduct, setNewProduct] = useState({
            name: '',
            imageUrl: '',
            count: '',
            weight: '',
            height: '',
            width: ''
    });

    const products = useSelector(selectProducts);


    const handleChange = ({ target }) => {
        setNewProduct({
            ...newProduct,
            [target.name]: target.value
        })
    }

    const handleDelete = () => {
        setModal('modal-hide')
        dispatch(setIsLoading());
        const newProducts = products.filter(product => product.id !== id);
        const deleteOptions = { method: 'DELETE' };
        setTimeout(() => {
            dispatch(deleteProduct({deleteOptions, id}));
            dispatch(setProducts(newProducts));
        }, 2000)
    }

    const handleEdit = () => {
        // const editedProducts = products.map(product => product.id === id ? {...product,})
        const prod = products.filter(product => product.id === id);
        let produ = {};
        for (let key in prod[0]) {
            produ = {...prod[0], name: 'ddd'}
        console.log(produ[key])
        console.log(produ)
        }
        
        // const editOptions = {
        //     method: 'PATCH',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify(edited)
        // }

        // dispatch(editProducts({editOptions, id}))
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

    const handleAdd = () => {
        if (!newProduct.name || !newProduct.count) {
            return
        }
        setModal('modal-hide')
        dispatch(setIsLoading());
        let productId = products.length + 1;
        if (products.filter(product => product.id === productId)) {
            productId++;
        }
        setNewProduct({
            ...newProduct,
            id: productId
        })
        
        const postOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newProduct)
        }
        setTimeout(() => {
            dispatch(addProduct(postOptions))
        }, 2000)
        setNewProduct({
            name: '',
            imageUrl: '',
            count: '',
            weight: '',
            height: '',
            width: ''
        });
    }

    return (
        <div className={modal}>
            <div className={`modal-${modal === 'modal-delete-product' ? 'delete' : ''}`}>
            {modal === 'modal-add-product'
                            ?   <h2>Add product</h2>
                            : modal === 'modal-edit-product' 
                            ? <h2>Edit product</h2>
                            : <h2>Delete product?</h2>
                            }
                     <form className='modal-add-product-form'>
                {modal !== 'modal-delete-product' &&
                <>
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
                    <p>Count:</p>
                    <input 
                        name='count'
                        type='number'
                        value={newProduct.count}
                        onChange={handleChange}
                        required
                        placeholder='2'>
                    </input>
                    <p>Width:</p>
                    <input 
                        name='width'
                        value={newProduct.width}
                        onChange={handleChange}
                        required
                        placeholder='71.5'>
                    </input>
                    <p>Height:</p>
                    <input 
                        name='height'
                        value={newProduct.height}
                        onChange={handleChange}
                        required
                        placeholder='146.7'>
                    </input>
                    <p>Weight:</p>
                    <input 
                        name='weight'
                        value={newProduct.weight}
                        onChange={handleChange}
                        required
                        placeholder='172g'>
                    </input>
                    </>
                }
               
                    <div className='modal-buttons'>
                        {modal === 'modal-add-product'
                            ?   <div onClick={handleAdd} className='modal-button modal-add-button'>Add</div>
                            :  modal === 'modal-edit-product'
                            ?  <div onClick={handleEdit} className='modal-button modal-edit-button'>Edit</div>
                            : <div onClick={handleDelete}  className='modal-button modal-delete-button'>Confirm</div>
                            }
                        
                        <div className='modal-button modal-cancel-button'onClick={() => setModal('modal-hide')}>Cancel</div>
                    </div>
                    
                </form>
            </div>
        </div>
    )
}