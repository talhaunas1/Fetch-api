import React from 'react'
import './product.css'
import usefetchproducts from './useFetchProducts'


export default function Products() {

    const [products,loading] = usefetchproducts()
    console.log("products", products)
    if(loading){
        return<div><p>loading...</p></div>
    }
  return (
    <div >
        {
            products.map((product,index)=>{
                return (<div className='prodcutdiv'> 

                    <img style={{width:50}} src={product.image} alt="product.category"/>
                    <p> Catogry: {product.category}</p>
                    <p> price { product.price}  </p>
                    <hr/>
                     </div>)
            })
        }
    </div>
  )
}
