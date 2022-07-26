import React from 'react'
import Carousel from 'react-bootstrap/Carousel';

const Slider = () => {
  return (
    <>
    <Carousel id="slider">
      <Carousel.Item interval={750}>
        <img
          className="d-block w-50"
          src="https://images.pexels.com/photos/3568518/pexels-photo-3568518.jpeg?auto=compress&cs=tinysrgb&w=800" 
          alt="First slide"
        />
        
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-50"
          src="https://images.pexels.com/photos/380782/pexels-photo-380782.jpeg?auto=compress&cs=tinysrgb&w=800"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-50"
          src="https://dantelaurelle.com/images/storeinterior.jpeg"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
    </>
  )
}

export default Slider