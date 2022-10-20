import React,{useState,useContext} from 'react'
import { useLocation } from 'react-router-dom'
import ProductCard from '../Components/ProductCard'
import { ToCartContext } from '../Config/ToCartCotext'
import { useSelector } from 'react-redux'
import { addToCartReducer } from '../Redux/Reducers/ToCartReducer'


export default function Profile() {
  // const [data,setData]=useState(useLocation().state)
  // console.log(useLocation())
  // const [data,setData]=useState(useLocation().state);
  const {cart,setCart}=useContext(ToCartContext);
  // console.log(addToCartReducer)
  const cartdata=useSelector(state=>state.cart);
 
  return (
    <>
    <div className='row'>
    {
      cartdata.map((item)=><div className='col-4 mt-3' key={item.id} ><ProductCard type="cart" data={item}/></div>)
    }
    </div>
    </>
  )
}
