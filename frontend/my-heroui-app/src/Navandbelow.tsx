import React from 'react'
import "./index.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import {ShoppingBasket} from "lucide-react"
import {useNavigate} from "react-router-dom"
const Navandbelow = () => {
  const navigate=useNavigate();
  return (
    <div>
          <div className='topMostdiv'>If you have any Question then ask us here</div>
       <div>
            <nav className='navbar'>
             <div className='logo'>Nothing</div>
      
             <div className='navContent'>
              <li onClick={()=>navigate("/HomePage")}>Home</li>
              <li onClick={()=>navigate("/AboutUs")}>About Us</li>
              <li>Contact Us</li>
              <li>OrderTracking</li>
              <li>Shop</li>
             </div>
             <div className='navIcons'>
               <FontAwesomeIcon icon={faMagnifyingGlass} style={{color:"#ffffff"}} />
               <ShoppingBasket color='#ffffff' />
             </div>
            </nav>
           </div>
            <div className='belowNav'>
        <button className='belowNavbutton specialbtn'>AUTUMN SALE</button>
        <button className='belowNavbutton' onClick={()=>navigate("/AllProducts")}>ALL PRODUCTS</button>
        <button className='belowNavbutton'>TOPS</button>
        <button className='belowNavbutton'>BOTTOMS</button>
        <button className='belowNavbutton'> SETS</button>
        <button className='belowNavbutton'> SHOES</button>
        <button className='belowNavbutton '>ACCESSORIES</button>
     </div>
      
      <div>
        <p className='aboveMainpic'>AUTUMN SALE LAST CHANCE</p>
         </div>
    </div>
  )
}

export default Navandbelow
