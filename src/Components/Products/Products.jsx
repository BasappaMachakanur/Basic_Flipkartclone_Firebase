import React, { useContext, useEffect, useState } from 'react'
import { useParams } from "react-router-dom"
import { allProductContext } from "../../Api/ProductContext"
import {AddToCart} from "../../Redux/Action/Action"
import {useDispatch} from "react-redux"


const Products = () => {
    let [data, setdata] = useState([]);
    let product = useParams();
    let Allproducts = useContext(allProductContext)
    let dispatch=useDispatch();


    useEffect(() => {
setdata(Allproducts.products.filter(a => a.category === product.name))

    }, [Allproducts.products])

return (
        <div className='d-flex flex-wrap'>
            {
                data? data.map(a => {
                 
                    return (
                        <div className="card d-flex flex-column justify-space-evenly m-1" style={{ width: "18rem",height:"20rem"}} key={a.id}>
                            <img src={a.thumbnail} className="card-img-top" alt="img" style={{height:"40%"}} />
                            <div className="card-body">
                                <h5 className="card-title">{a.brand}</h5>
                                <p className="card-text">Price:{a.price}</p>
                                <button className='btn btn-primary' onClick={()=>dispatch(AddToCart(a))}>AddToCart</button>
                            </div>
                           
                        </div>
                    )
                }) : <h1>Loadding...🚎</h1>
            }
        </div>
    )
}

export default Products