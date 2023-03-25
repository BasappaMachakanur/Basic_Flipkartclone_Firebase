import React, { useState } from 'react'
import "./Navbar.css"
import { Link } from "react-router-dom"
import { GrSearch } from 'react-icons/gr';
import { CgShoppingCart } from "react-icons/cg"
import LoginHover from '../HoverComponents/LoginHover';
import MoreHover from '../HoverComponents/MoreHover';
import { useSelector } from "react-redux"
import { Modal } from "react-bootstrap"
import Login from '../Pages/AuthPages/Login';
import Signup from '../Pages/AuthPages/Signup';


function Navbar() {
  let [show, setisShow] = useState(false);
  let [signupModel, setsignupmodel] = useState(false)
  // let navigate = useNavigate();
  let CartProduct = useSelector(state => state.AddToCartReducer);

  let iconStyles = { color: "white", fontSize: "1.5em", margin: "2px" };

  let displaymodel = () => {
    setsignupmodel(false)
    if (show) {
      setisShow(false)
    } else {
      setisShow(true)
    }
  }

  let displaysignmodel = () => {
    setisShow(false)
    if (signupModel) {
      setsignupmodel(false)
    } else {
      setsignupmodel(true)
    }
  }

return (
    <div>
      <div id='main-container'>
        <nav id='Nav-container'>
          <div id='logoBlock'><Link to="/">Basappa</Link><sub>Pro</sub></div>
          <div id='input-container'>
            <input type="text" placeholder='Search for prodduct Brand and more' />
            <span><GrSearch /></span>
          </div>
          <div id='loginbtn'>
            <button onClick={displaymodel}>Login</button>
            <div id='dropDown'>
              <LoginHover data={displaysignmodel} />
            </div>
          </div>
          <div id='menuBlock'>
            <ul>
              {/* <li><Link to="/">Home</Link></li> */}
              <li><Link to="/seller">Become a seller</Link></li>
              {/* <li><Link to="/contact">Contact</Link></li> */}
              <li id='more-container'><Link to="/more">More</Link>
                <ul>
                  <MoreHover />
                </ul>
              </li>
            </ul>
          </div>
          <div id='cart-container' ><Link to="/cart">
            <CgShoppingCart style={iconStyles} />
            <sup style={{ color: "yellow", fontSize: "16px" }}>
              {CartProduct.length === 0 ? null : CartProduct.length}
            </sup>cart</Link></div>
        </nav>
      </div>
      <Modal show={show} dialogClassName="custom-dialog">
        <button onClick={displaymodel} className="dialogbtn" >X</button>
        <Login displaysignmodel={displaysignmodel} />
      </Modal>
      <Modal show={signupModel} dialogClassName="custom-dialog">
        <button onClick={displaysignmodel} className="dialogbtn" >X</button>
        <Signup data={displaymodel} />
      </Modal>

    </div>
  )
}

export default Navbar