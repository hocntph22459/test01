import axios from 'axios'
import { useEffect } from 'react'
import { GetProduct } from '../../api/product'
// import { useEffect, useState } from 'react'

const ListProduct = () => {
    useEffect(()=>{
        const fetchproduct = async()=>{
            try {
                const response = await GetProduct()
                console.log(response);
            } catch (error) {
                console.log(error);
            }
        }
        fetchproduct()
    },[])
    return (
        // if(product){
        //     product.map(list=>{
        //         return (
        //             <h1>abc</h1>
    
        //         )
        //     })  
        // }
                    <h1>abc</h1>

        
    )

}
export default ListProduct