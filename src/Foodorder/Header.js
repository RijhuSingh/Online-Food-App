import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import './header.css'
import UserContext from '../utils/UserContext';



const Header = () => {
  const [loggedIn,setLoggedIn]=useState(false);


  const { user }=useContext(UserContext);


  return (
    <div className="header-container">
        <div className="logo">
          <Link to='/' >
              <img src="https://t3.ftcdn.net/jpg/03/74/73/78/360_F_374737839_VsxlmnN7soqOOOFFzy5kfE9H6PFMCkPX.jpg" alt="LOGO" />
          </Link>
            
        </div>

        <ul className="items">
          <Link className="item" to='/'>Home</Link>
          <Link className="item" to='about'>About</Link>
          <Link className="item" to='contact'>Contact</Link>
          <Link className="item" to='cart'>Cart</Link>
            
        </ul>
        {user.name}
        {
          loggedIn ?  (<button  className='btn' onClick={()=>setLoggedIn(false)}>Logout</button>) :  (<button className='btn' onClick={()=>setLoggedIn(true)}>Login</button>)
        }

    </div>
  )
}

export default Header