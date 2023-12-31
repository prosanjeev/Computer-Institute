import './MySimpleImageSlider.css'
import SimpleImageSlider from 'react-simple-image-slider';

const images = [
  { url: "https://source.unsplash.com/1500x500/?teacher" },
  { url: "https://source.unsplash.com/1500x500/?software" },
  { url: "https://source.unsplash.com/1500x500/?computer" },

];
const MySimpleImageSlider = () => {

  return (
    <div className='home-image-slider'>
      <SimpleImageSlider 
     
        width={1536}
        height={500}
        images={images}
        showBullets={true}
        showNavs={true}
      />
      
    </div>
  );
};

export default MySimpleImageSlider;
