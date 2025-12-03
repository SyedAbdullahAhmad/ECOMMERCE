import React from 'react'
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem } from "@heroui/navbar";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { faArrowRight, faTruck, faSackDollar, faHeadset, faCreditCard } from '@fortawesome/free-solid-svg-icons'
import { ShoppingBasket } from "lucide-react"
import { Card, CardHeader, CardBody, CardFooter } from "@heroui/card";
import { Image } from "@heroui/image";
import "./index.css"
const HomePage = () => {
  return (
    <>
      <div className='HomePageCoverdiv'>


        <div className='mainPagepic'>

          <b> AUTUMN SALE</b>
          <button>Shop Now</button>
        </div>
      </div>
      <div className='secondPage'>
        <div className='CardsDiv'>

          <div>
            <div className='card1 allcard'></div>
            <p>Tops</p>
          </div>
          <div>
            <div className='card2 allcard'></div>
            <p>Shirts</p>
          </div>
          <div>
            <div className='card3 allcard'></div>
            <p>Shoes</p>
          </div>
          <div>
            <div className='card4 allcard'></div>
            <p>Accessories</p>
          </div>
        </div>
      </div>


      <div className="thirdPage">
        <div className='thirddivCard'>
          <div>
            <video autoPlay muted loop >
              <source src='carVideo.mp4' type="video/mp4" />
            </video>
          </div>

          <div className="secondPartof3drdDiv">
            <h1><b>For Those Who See Beyond.</b></h1>
            <p>At Célvare, we believe true elegance isn’t loud — it lingers. Our pieces aren’t made to chase trends but to outlast them. Each design is a study in restraint, crafted for those who know that less is always more.
              Not fashion. Not noise.
              Just timeless pieces for a life well-dressed.</p>

            <button>Explore Our Timeless Pieces <FontAwesomeIcon icon={faArrowRight} /></button>
          </div>
        </div>
      </div>


      <div className="ForthPage">
        <h1><b>PREMIUMS</b></h1>
        <div className='forthPageBothDiv'>
          <div className='card1'>
            <h1>Cardigans & Sweaters</h1>
            <p className='.forthPageShopNowP'>Effortless sophistication for every season. Crafted for comfort, designed for distinction.</p>
            <button className='forthPageShopNowbtn'>ShopNow</button>
          </div>
          <div className='card2'>
            <h1>Winter Jackets</h1>
            <p className='forthPageShopNowP'>Built for cold days and bold looks. Premium jackets designed to perform and impress.</p>
            <button className='forthPageShopNowbtn'>ShopNow</button>
          </div>
        </div>
      </div>
      <div className='fifthPage'>
        <div className='policyDiv'>
          <div className='truck'>
            <FontAwesomeIcon icon={faTruck} />
            <h1><b>Free Shipping</b></h1>
            <p>We offer free delivery on all orders.</p>
          </div>
          <div className="returnDiv">
            <FontAwesomeIcon icon={faSackDollar} />
            <h1><b>30-Day Return</b></h1>
            <p>Not satisfied? You have 30 days to return your item.</p>
          </div>
          <div className="CustomerSupport">
            <FontAwesomeIcon icon={faHeadset} />
            <h1><b>Customer Support</b></h1>
            <p>Monday to Saturday: 9:30 AM – 7:00 PM</p>
          </div>
          <div className='SecurePayments'>
            <FontAwesomeIcon icon={faCreditCard} />
            <h1><b>SecurePayments</b></h1>
            <p>American Express, Apple Pay, Google Pay, iDEAL, Maesreo, Mastercard, Shop Pay, Visa.</p>
          </div>
        </div>

       
      </div>
    </>
  )
}

export default HomePage
