import React from 'react'
import "./index.css"
const footer = () => {
  return (
    <div>
       <footer className='footer'>
          <div className='fooerUpperdiv'>
            <div className='footerLogo'>Nothing</div>
            <div className='footerPolicies'>
              <h1><b>Policies</b></h1>
             <li> Privacy Policy</li>
             <li> Terms of Service</li>
             <li> Return and Refund Policy</li>
             <li> Shipping Policy</li>
              <li>Payment Policy</li>
              <li>Legal Notice</li>
            </div>
            <div className='footerSupport'>
              <h1><b>Support</b></h1>
              <li>Home</li>
              <li>Shop</li>
              <li>About Us</li>
              <li>Contact</li>
              <li>Order Tracking</li>
              <li>FAQS</li>
            </div>
            <div className='ContactInformation'>
              <h1><b>Contact Information</b></h1>
              <p>Website Name: Célvare</p>
              <p>Chamber of Commerce (KVK): 89402669
VAT Number: NL004723901B64
D-U-N-S Number: 494615488</p>
              <p>Phone: +447411208401</p>
              <p>Email: info@celvare.com</p>
              <p>Customer service opening hours:
Monday to Saturday: 9:30 AM – 7:00 PM</p>
              <p>We aim to respond to all inquiries within 1 business day.</p>
            </div>
          </div>
        </footer>
    </div>
  )
}

export default footer
