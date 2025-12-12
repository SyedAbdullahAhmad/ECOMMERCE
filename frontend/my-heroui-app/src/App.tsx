import React from 'react'
import { Route, Routes, useLocation, Navigate } from "react-router-dom"
import HomePage from './HomePage'
import AboutUs from './AboutUs'
import Navandbelow from './Navandbelow'
import Footer from './Footer'
import AllProducts from './AllProducts'
import LoginPage from './LoginPage'
import SignupPage from './SignupPage'
import { useState, useEffect } from 'react'
import AdminLogin from './AdminLogin'
import AdminPanel from './AdminPanel'
import NewProductPage from './NewProductPage'
import DeleteProductPage from './DeleteProductPage'
const App = () => {

    const [tops, setTops] = useState([])
    const [bottoms, setBottoms] = useState([])
    const [shoes, setShoes] = useState([])
    const [accessories, setAccessories] = useState([])

  useEffect(() => {
    const path = window.location.pathname;

    // Handle uppercase versions of your known routes
    const routeMap: Record<string, string> = {
      "/loginpage": "/loginPage",

    };

    const lower = path.toLowerCase();
    if (routeMap[lower] && routeMap[lower] !== path) {
      window.location.replace(routeMap[lower]);
    }
  }, []);



  const [credentials, setcredentials] = useState({
    email: "",
    password: ""
  })
  const location = useLocation();
  const hideLocation = location.pathname === "/loginPage" || location.pathname === "/signupPage" || location.pathname === "/LoginPage" || location.pathname === "/adminLogin" || location.pathname === "/adminPanel" || location.pathname === "/newProductPage" || location.pathname === "/deleteProductPage";

  return (
    <div>
      {!hideLocation && <Navandbelow />}
      <Routes>
        <Route path="/" element={<Navigate to="/HomePage" replace />} />
        <Route path='/loginPage' element={<LoginPage credentials={credentials} setcredentials={setcredentials} />} />
        <Route path='/HomePage' element={<HomePage />} />
        <Route path='/AboutUs' element={<AboutUs />} />
        <Route path='/Allproducts' element={<AllProducts />} />
        <Route path='/signupPage' element={<SignupPage credentials={credentials} setcredentials={setcredentials} />} />
        <Route path='adminLogin' element={<AdminLogin credentials={credentials} setcredentials={setcredentials} />} />
        <Route path='/adminPanel' element={<AdminPanel />} />
        <Route path='/newProductPage' element={<NewProductPage />} />
        <Route path="deleteProductPage" element={<DeleteProductPage tops={tops} setTops={setTops} bottoms={bottoms} setBottoms={setBottoms} shoes={shoes} setShoes={setShoes} accessories={accessories} setAccessories={setAccessories} />} />
      </Routes>
      {!hideLocation && <Footer />}

    </div>
  )
}

export default App
