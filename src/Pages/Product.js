import React, { useEffect, useState } from 'react'
import ProductCard from '../Components/ProductCard'
import { axiosInstance } from '../Config/axios'

export default function Product() {
  const [prd,setprd]=useState([])
  useEffect(()=>
  {
    axiosInstance.get('/products').then((res)=>
   {
    // console.log(res)
    setprd(res.data.products)
    console.log(res.data.products)
   }
    )
  },[])
  return (
    <div className='row'>
    {
       prd.map((item)=><div className='col-4 mt-3' key={item.id} ><ProductCard data={item}/></div>)
    }</div>
  )
}
