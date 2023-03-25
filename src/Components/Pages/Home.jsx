import React from 'react'
import {Link,Outlet} from "react-router-dom"
import mobile from "../../images/mobiles.png"
import home from "../../images/Home.webp"
import Grocery from "../../images/Grocery.webp"
import flites from "../../images/Flites.webp"
import fashion from "../../images/Fashion.webp"
import electronics from "../../images/Electronics.png"
import beauty from "../../images/Beauty.webp"
import tv from "../../images/Tv.webp"
import offer from "../../images/offer.png"
import "./Pages.css"

const Home = () => {
  return (
   <div>
     <div className='Product-container'>
      <div><Link to='product\offer'><img src={offer} alt="offerimg" />Get Offer</Link></div>
      <div><Link to='product\smartphones'><img src={mobile} alt="offerimg" />Mobiles & Tablets</Link> </div>
      <div><Link to='product\laptops'><img src={electronics} alt="offerimg" />Electronics</Link></div>
      <div><Link to='product\tv'><img src={tv} alt="offerimg" />Tvs & Appliances</Link></div>
      <div><Link to='product\skincare'><img src={fashion} alt="offerimg" />Fashion</Link></div>
      <div><Link to='product\fragrances'><img src={beauty} alt="offerimg" />Beauty</Link></div>
      <div><Link to='product\home-decoration'><img src={home} alt="offerimg" />Home & furniture</Link></div>
      <div><Link to='product\flites'><img src={flites} alt="offerimg" />Flights</Link></div>
      <div><Link to='product\groceries'><img src={Grocery} alt="offerimg" />Grocery</Link></div>
       </div>
   </div>
  )
}

export default Home