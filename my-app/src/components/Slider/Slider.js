import React from 'react';
import Slider from 'react-slick';
import { Box } from '@mui/material';
import Home from '../Home/Home';
import './slider.css'
const SliderComponent = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024, // Tablet
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768, // Mobile
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480, // Small mobile
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Box sx={{ width: '100%', height: '100vh' }}>
      <Slider {...settings}>
        <Box sx={{ width: '100%', height: '100vh' }}>
          <Home />
        </Box>
        <Box sx={{ width: '100%', height: '100vh' }}>
          <img src="/slider1.png" alt="slider1" style={{ width: '100%', height: '100%' ,objectFit:'cover'}} />
        </Box>
        <Box sx={{ width: '100%', height: '100vh' }}>
          <img src="/slider2.png" alt="slider2" style={{ width: '100%', height: '100%',objectFit:'cover' }} />
        </Box>
        <Box sx={{ width: '100%', height: '100vh' }}>
          <img src="/slider3.png" alt="slider3" style={{ width: '100%', height: '100%',objectFit:'cover' }} />
        </Box>
        {/* Add more slides here */}
      </Slider>
    </Box>
  );
};

export default SliderComponent;
