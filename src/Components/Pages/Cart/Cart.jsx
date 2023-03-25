import React from 'react'
import {useSelector,useDispatch} from "react-redux"
import "./Cart.css"
import {RemoveFromCart} from "../../../Redux/Action/Action"

const Cart = () => {
  let dispatch=useDispatch();
  let CartProduct=useSelector(state=>state.AddToCartReducer);
  console.log(CartProduct)
  return (
    <div className='cart-container'>
     <div className='cart-subcontainer'>
     { CartProduct.map(a=>{
    return (
      <div className='card-content'>
         <img src={a.thumbnail} alt="productimg" className='card-img-top' />
           <div className='card-body'>
            <p>{a.brand}</p>
            <p>{a.price}</p>
            <p>{a.description}</p>
            <button onClick={()=>dispatch(RemoveFromCart(a))}>Remove</button>
           </div>
        <div>

        </div>
      </div>
    )
    })

   }
   
      </div>  
   
    </div>
  )
}

export default Cart