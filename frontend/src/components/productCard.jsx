import { useState,useEffect } from 'react';
import  {fetchProduct} from '../services/fetchProducts.js'
export const ProductCard = ()=>{
    const [product,setProduct]=useState([]);
    useEffect(()=>{
        const getProduct = async ()=>{
            const data = await fetchProduct();
            setProduct(data);
        };
        getProduct();
    },[]);


    return(
        <div className='ProductComponent'>
            <div className='ProductCard'>
                {product.map((p)=>{
                    return <div key={p._id} >{p.name}</div>;
                })}
            </div>
        </div>
    )
}