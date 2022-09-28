import './App.css';
import { useEffect } from 'react';
import { NavBar } from '../components/navBar/NavBar'
import { Products } from '../features/products/Products';
import { Route, Routes, Navigate } from 'react-router-dom';
import { loadProducts } from '../features/products/productsSlice'
import { useDispatch } from 'react-redux';

function App() {
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(loadProducts())
}, [])

  return (
    <Routes>
      <Route path='/' element={<NavBar />}>
        <Route index element={<Navigate to='products' />} />
        <Route path='products' element={<Products />} /> 
      </Route>
    </Routes>
  );
}

export default App;
