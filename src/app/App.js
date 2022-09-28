import './App.css';
import { NavBar } from '../components/navBar/NavBar'
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path='/' element={<NavBar />}> 
      </Route>
    </Routes>
  );
}

export default App;
