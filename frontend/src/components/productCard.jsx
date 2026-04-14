import  fetchProduct from '../services/fetchProducts.js'
const productCard =async ()=>{
    const product = await fetchProduct();
    return(
        <div className='ProductComponent'>
            <div className='ProductCard'>
                {product.map((p)=>{
                    return <div>p</div>;
                })}
            </div>
        </div>
    )
}