import React, {useState} from 'react'
import { useLocation } from 'react-router-dom';

export default function ProductDetails() {
  // const [image,setImage]=useState([])
  const [data,setData]=useState(useLocation().state)
   
  return (
    <div>
      {<img src={data.images[0]}/>}
      {<h1><span style={{color:"blue"}}>Title: </span>{data.title}</h1>}
      {<h2><span style={{color:"blue"}}>Brand: </span>{data.brand}</h2>}
      {<h3><span style={{color:"blue"}}>Category: </span>{data.category}</h3>}
      {<p><span style={{color:"blue"}}>Description: </span>{data.description}</p>}
      {<h4><span style={{color:"blue"}}>Discount: </span>{data.discountPercentage}</h4>}
      {<h5><span style={{color:"blue"}}>Price: </span>{data.price}</h5>}
      
      </div>
  )
}
