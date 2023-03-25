import React from 'react'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer} from 'react-toastify';
import Navbar from './Components/Navbar/Navbar'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from './Components/Pages/Home'
import Seller from './Components/Pages/Seller'
import Contact from './Components/Pages/Contact'
import Cart from './Components/Pages/Cart/Cart'
import More from './Components/Pages/More'
import PageNotFound from './Components/Pages/PageNotFound'
import Login from './Components/Pages/AuthPages/Login'
import ProductContext from './Api/ProductContext'
import Products from './Components/Products/Products'
import Store from './Redux/Store/Store'
import  {Provider} from "react-redux"
// import Signup from './Components/Pages/AuthPages/Signup'



const App = () => {

  return (
    <BrowserRouter>
    <Provider store={Store}>
    <ProductContext>
      <Navbar/>
      <ToastContainer position='top-right'/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/product/:name' element={<Products/>}></Route>
        <Route path='/seller' element={<Seller/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/cart' element={<Cart/>}></Route>
        <Route path='/more' element={<More/>}></Route>
        * <Route path='/login' element={<Login/>}></Route> *
        <Route path='*' element={<PageNotFound/>}></Route>
      </Routes>
      </ProductContext>
      </Provider>
    </BrowserRouter>
  )
}

export default App