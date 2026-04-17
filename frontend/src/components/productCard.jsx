import  {fetchProduct} from '../services/fetchProducts.js'
export const ProductCard =async ()=>{
    const product = await fetchProduct();

    return(
        <div className='ProductComponent'>
            <div className='ProductCard'>
                {product.map((p)=>{
                    console.log(p);
                    return <div>p</div>;
                })}
            </div>
        </div>
    )
}