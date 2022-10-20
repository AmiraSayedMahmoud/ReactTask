import React from 'react'
import { ToCartContext } from '../Config/ToCartCotext';
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import {addToCart} from '../Redux/Actions/ToCartAction';

export default function ProductCard({data, type}) {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  // const{cart,serCart}=useContext(ToCartContext);
  function go(data)
  {
      
      navigate('/product/details',{state:data});
      console.log(data.images[0])
  }
  function add(data){
    dispatch(addToCart(data))
  }

  return (
   
    <div className="card" style={{width: "18rem"}}>
    <img className="card-img-top" src={data.images[0]} style={{width:"100%", height:"10rem"}}/>
    <div className="card-body" style={{height:"15rem"}}>
      <h5 className="card-title">{data.brand}</h5>
      <p className="card-text">{data.description}</p>
   {!type&& <button onClick={()=>{go(data)}} className="btn btn-primary me-3">Details</button>}
    {!type&& <button onClick={()=>{add(data)}} className="btn btn-primary">Add To Cart</button>}
    </div>
  </div>
  )
}
