import SimpleImageSlider from 'react-simple-image-slider';

const images = [
  { url: "https://source.unsplash.com/1500x500/?teacher" },
  { url: "https://source.unsplash.com/1500x500/?software" },
  { url: "https://source.unsplash.com/1500x500/?computer" },
];

const MySimpleImageSlider = () => {
  return (
    <div>
      <SimpleImageSlider
       width="100vw"
       height={504}  // Default height for non-mobile devices
       images={images}
       showBullets={true}
       showNavs={true}
     
      />
    </div>
  );
};

export default MySimpleImageSlider;
