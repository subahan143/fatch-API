import React, { useEffect, useState } from 'react'
import "./main2.css"

import Axios from "axios"
import Cards from '../Cards/Cards'
import Load from '../Loader/Load'



const Main2 = () => {
  const [Products,SetProducts]=useState([])
  const[Loader,SetLoader]=useState(false)
  const fetchData=async()=>{

SetLoader(true)

    await Axios.get('https://dummyjson.com/products').then((res)=>{
      console.log(res.data.products)

      SetProducts(res.data.products)
    }).catch((err)=>console.log(err))
    SetLoader(false)
  }
  useEffect(()=>{
    fetchData()
  },[])



  return (

<>
{Loader?
    <Load/>:
    <div className='home'>
      
{Products.map((ele) =><Cards thumbnail={ele.thumbnail } id={ele.id} title={ele.title} price={ele.price} />)}
    </div>}

</>
  )

  }
export default Main2
