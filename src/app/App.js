import './App.css';
import { useEffect, useState } from 'react';
import { NavBar } from '../components/navBar/NavBar'
import { Products } from '../features/products/Products';
import { Route, Routes, Navigate } from 'react-router-dom';
import { loadProducts } from '../features/products/productsSlice'
import { useDispatch } from 'react-redux';
import { ProductView } from '../components/productView/ProductView';

function App() {
  const dispatch = useDispatch();
  const [modal, setModal] = useState('modal-hide');
  
  useEffect(() => {
    setTimeout(() => {
    dispatch(loadProducts())
    }, 2000)
    // eslint-disable-next-line
}, [])

  return (
    <Routes>
      <Route path='/' element={<NavBar />}>
        <Route index element={<Navigate to='products' />} />
        <Route path='products' element={<Products setModal={setModal} modal={modal} />} />
        <Route path='/products/:id' element={<ProductView setModal={setModal} modal={modal} />} /> 
      </Route>
    </Routes>
  );
}

export default App;
