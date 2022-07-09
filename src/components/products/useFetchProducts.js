import { useState,useEffect } from "react";
// import axious from 'axious'
import React from 'react'

export default function useFetchProducts() {

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(false)


    async function fetchProducts() {
        setLoading(true)
        let prodactsRes = await fetch('https://fakestoreapi.com/products')
        let products = await prodactsRes.json()
        setProducts(products)
        setLoading(false)
        // console.log("prodacts" , products);
    }

    //axious request server to get api
    // async function fetchProducts() {
    //     try{
    //         let products =await axious.get('https://fakestoreapi.com/products')
    //         setProducts(products.data)
    //     }
    //    catch(err)
    //    {
    //     console.log("error",err)
    //    }
    //     // console.log("prodacts" , products);
    // }


    useEffect(()=> {

        // fetch('https://fakestoreapi.com/products')
        //     .then(res=>res.json())
        //     .then(json=>console.log(json))
        fetchProducts()

    }, [])
  return [products,loading]
}

