import React from 'react'
import Airblack_logo from '../images/Airblack_logo.png'
import './styles/Heading.css'
import firstImg from '../images/first_background_img.png'
import secondImg from '../images/second_background_img.png'
import thirdImg from '../images/third_background_img.png'
import fourthImg from '../images/fourth_background_img.png'
import back_image from '../images/heading-image.png'
const Heading = () => {
  return (
    <div className='Heading-container'>
      <div className="background-img-container">
       <div className="image1-container">
       <img src={back_image} alt="" />
       </div>
      <div className="company-logo">
      <img src={Airblack_logo} alt="" />
      
      </div>
      <p>Presents</p>
       </div>
        
    </div>
  )
}

export default Heading