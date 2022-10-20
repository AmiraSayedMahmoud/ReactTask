import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import './App.css';
import { Route, Routes } from 'react-router-dom';
// import { axios } from 'axios';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import Product from './Pages/Product';
import Login from './Pages/Login';
import Profile from './Pages/Profile';
import ProductCard from './Components/ProductCard';
import ProductDetails from './Components/ProductDetails';
import Notfound from './Pages/Notfound';
import Garud from './Components/Garud';
import Count from './Pages/Count';
import { countContext } from './Config/CountContext';
import {ToCartContext} from './Config/ToCartCotext';

function App() {
  const[count,setCount]=useState(0);
  const[cart,setCart]=useState([]);
  return (
    <>
    <ToCartContext.Provider value={{cart,setCart}}>
    {/* <countContext.Provider value={{count,setCount}}> */}
    <Navbar/>
  <Routes>
    <Route index element={<Home/>}/>
    <Route path='/home' element={<Home/>} />
    <Route path='/product' element={<Garud><Product/></Garud>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/profile' element={<Garud><Profile/></Garud>}/>
    <Route path='/product/card' element={<ProductCard/>}/>
    <Route path='/product/details' element={<ProductDetails/>}/>
    <Route path='/count' element={<Count/>}/>
    <Route path='*' element={<Notfound/>}/>
  </Routes>
  {/* </countContext.Provider> */}
  </ToCartContext.Provider>
    </>
  );
}

export default App;
