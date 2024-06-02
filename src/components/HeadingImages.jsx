import React from 'react'
import img1 from '../images/first_background_img.png'
import img2 from '../images/second_background_img.png'
import img3 from '../images/third_background_img.png'
import img4 from '../images/fourth_background_img.png'
import '../styles/HeadingImage.css'

const HeadingImages = () => {
  return (
    <div className='back-images'>
        <div className="img-container-1">
            <img src={img1} alt="" />
        </div>
        <div className="img-container-2">
            <img src={img2} alt="" />
        </div>
        <div className="img-container-3">
            <img src={img3}></img>
        </div>
        <div className="img-container-4">
        <img src={img4}></img>
        </div>
    </div>
  )
}

export default HeadingImages