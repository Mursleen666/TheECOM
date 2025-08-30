import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import About from './Pages/About'
import Cart from './Pages/Cart'
import Collection from './Pages/Collection'
import Login from './Pages/Login'
import Order from './Pages/Order'
import Contact from './pages/Contact'
import PlaceOrder from './Pages/PlaceOrder'
import Product from './Pages/Product'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import SearchBar from './components/SearchBar'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




const App = () => {
  return (
   
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
      <ToastContainer />
      <Navbar/>
      <SearchBar />
     <Routes>
     <Route path='/' element={<Home/>} />
     <Route path='/About' element={<About/>} />
     <Route path='/Cart' element={<Cart/>}/>
     <Route path='/Collection' element={<Collection/>}/>
     <Route path='/Login' element={<Login/>} />
     <Route path='/Order' element={<Order/>} />
     <Route path='/PlaceOrder' element={<PlaceOrder/>}/>
     <Route path='/product/:productId' element={<Product/>}/>
     <Route path='/Contact' element={<Contact/>}/>
     
      

     </Routes>
     <Footer/> 
    </div>
 
  )
}

export default App
