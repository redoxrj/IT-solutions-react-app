import React from 'react'
import img1 from '../assets/3.jpg'
import img2 from '../assets/4.jpg'
import {Carousel} from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

const Services = () => {
  return (
      <div >
       <Carousel infiniteLoop showIndicators={true} showArrows={true} showThumbs={false} showStatus={false} autoPlay interval={1000}>
    <div>
        <img src={img1} alt="" />
        <p className={'legend'}>Full Stack</p>
    </div>
    <div>
        <img src={img2} alt="" />
        <p className={'legend'}>Peer to Peer Solutions</p>
    </div>
   </Carousel>
   </div>
  )
}

export default Services
