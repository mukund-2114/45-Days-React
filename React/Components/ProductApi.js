import React, { useState } from 'react'
import axios from 'axios';

const ProductApi = () => {

    const [products, setproducts] = useState([]);

   const data =  axios.get('https://fakestoreapi.com/products').then((res)=>{setproducts(res.data)});
//    console.log(products)

return (
    <div>
        <h4 className='bg-success'>Product</h4>
        <div className="row">
        {
            products.map((i)=>(
                <div className="col-3">
                    <div className="card">
                    <img src={i.image} className="card-img-top" alt="..." width='400' height='500'/>
                    <div className="card-body">
                        <h5 className="card-title">{i.title}</h5>
                        <p className="card-text">{i.description}</p>
                        <i>{i.category}</i>
                        <b>{i.price}</b>
                        <a href="/" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
                </div>
            ))
        }
        </div>
    </div>
  )
}

export default ProductApi