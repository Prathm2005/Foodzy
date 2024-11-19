import React, { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Cart from './pages/Cart/Cart';
import Placeorder from './pages/Placeorder/Placeorder';
import Footer from './components/Footer/Footer';
import Aboutus from './pages/Aboutus/Aboutus';
import PrivacyPolicy from './pages/PrivacyPolicy/PrivacyPolicy';
import Loginpopup from './components/Loginpopup/Loginpopup';
import Verify  from './pages/verify/verify'
import MyOrders from './pages/MyOrders/MyOrders';




const App = () => {
  const [showLogin,setShowLogin]=useState(false)
  return (
    <>
    {showLogin?<Loginpopup setShowLogin={setShowLogin}/>:<></>}
      <div className='app'>
        <Navbar setShowLogin={setShowLogin}/>
       
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/order' element={<Placeorder />} />
          <Route path='/aboutus' element={<Aboutus />} />
          <Route path='/policy' element={<PrivacyPolicy />} />
          <Route path='/verify' element={<Verify/>}/>
          <Route  path='/myorders'  element={<MyOrders/>}/>
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;


