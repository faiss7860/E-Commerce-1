import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'

export const FakeStore = () => {  
  const [products, setProducts] = useState([])
  const fetch_data=()=>{
    axios.get('https://fakestoreapi.com/products').then((respons)=>{

        const product = respons.data
        setProducts(product)
      })
  }
console.log(products)
  
  useEffect(()=>{
      fetch_data()
  },[])

  return (
    <>
    {
      products.map((product)=>{
        return(
          <>
          {product.id}
          {product.title}
          {product.price}
          </>
        )
      })
    }
    </>
  )
}
