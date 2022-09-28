import './modal.css'

export const Modal = ({ setModal, modal }) => {
    return (
        <div className={modal}>
            <div className='modal'>
                <h2>Add product</h2>
                <form className='modal-add-product-form'>
                    <p>Product name</p>
                    <input placeholder='Apple iPhone 14 256GB'></input>
                    <p>Image URL</p>
                    <input placeholder='https://i.moyo.ua/55aec978-af5b-4da3-9655-8ddd8460efaf/https://img.moyo.ua/img/products/5236/72_4000.jpg/w_600,h_600,r_inside,imdt'></input>
                    <p>count</p>
                    <input placeholder='2'></input>
                    <p>width</p>
                    <input placeholder='71.5'></input>
                    <p>height</p>
                    <input placeholder='146.7'></input>
                    <p>weight</p>
                    <input placeholder='172g'></input>
                    <div className='modal-buttons'>
                        <div className='modal-button modal-add-button'>Add</div>
                        <div className='modal-button modal-cancel-button'onClick={() => setModal('modal-hide')}>Cancel</div>
                    </div>
                    
                </form>
            </div>
        </div>
    )
}