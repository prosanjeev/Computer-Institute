// MySimpleImageSlider.js

import React from 'react';
import SimpleImageSlider from 'react-simple-image-slider';

const images = [
  { url: "https://source.unsplash.com/1500x500/?teacher" },
  { url: "https://source.unsplash.com/1500x500/?software" },
  { url: "https://source.unsplash.com/1500x500/?computer" },
];

const MySimpleImageSlider = () => {
  const isMobile = window.innerWidth <= 768;

  return (
    <div className='home-image-slider'>
      <SimpleImageSlider 
        width="100vw"
        height={isMobile ? '30%' : '70%'} // Adjust the percentages as needed
        images={images}
        showBullets={true}
        showNavs={true}
      />
    </div>
  );
};

export default MySimpleImageSlider;
