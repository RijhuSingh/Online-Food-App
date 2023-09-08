
import {  Outlet, Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Foodorder/Components/About';
import Contact from './Foodorder/Components/Contact';
import Header from './Foodorder/Header'
import Body from './Foodorder/Components/Body';
import Error from './Foodorder/Components/Error';
import RestaurantMenu from './Foodorder/RestaurantMenu';
import { useState } from 'react';
import UserContext from './utils/UserContext';
import Footer from './Foodorder/Components/Footer';


function App() {

  const [user,setUser]=useState({
    name:"Rijhu",
    email:'Rijhsingh1@gmail.com'
  });



  return (
    <div className="app">
      <UserContext.Provider value={{user:user}} >

          <Header />
          <Outlet />

      </UserContext.Provider>

       

        <Routes>
          <Route path='/' element={<Body />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='restaurant/:resId' element={<RestaurantMenu />} />
          <Route path='*' element={<Error />} />
        </Routes>

        <Footer />
        
    </div>
  );
}





export default App;


