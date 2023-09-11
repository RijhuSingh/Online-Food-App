import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom';
// import './header.css'
import UserContext from '../utils/UserContext';



const Header = () => {
  const [loggedIn,setLoggedIn]=useState(false);


  const { user }=useContext(UserContext);


  return (
    <div className="flex items-center justify-between shadow-lg">
        <div>
          <Link to='/' >
              <img className='w-24 h-24' src="https://t3.ftcdn.net/jpg/03/74/73/78/360_F_374737839_VsxlmnN7soqOOOFFzy5kfE9H6PFMCkPX.jpg" alt="LOGO" />
          </Link>
            
        </div>

        <ul className="flex">
          <Link className='mx-6 hover:text-red-200' to='/'>Home</Link>
          <Link className="mx-6 hover:text-red-200" to='about'>About</Link>
          <Link className="mx-6 hover:text-red-200" to='contact'>Contact</Link>
          <Link className="mx-6 hover:text-red-200" to='cart'>Cart</Link>
            
        </ul>
        <div>
          {user.name}
        </div>
        {
          loggedIn ?  (<button  className='items-center mx-2 p-1 border border-red-100' onClick={()=>setLoggedIn(false)}>Logout</button>) :  (<button className='items-center mx-2 p-1 border border-red-100' onClick={()=>setLoggedIn(true)}>Login</button>)
        }

    </div>
  )
}

export default Header