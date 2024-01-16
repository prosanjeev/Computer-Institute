import { Box } from '@chakra-ui/react';
import SimpleImageSlider from 'react-simple-image-slider';

const images = [
  { url: "https://source.unsplash.com/1500x500/?teacher" },
  { url: "https://source.unsplash.com/1500x500/?software" },
  { url: "https://source.unsplash.com/1500x500/?computer" },
];

const MySimpleImageSlider = () => {
  return (
    <Box>
            <SimpleImageSlider
            width="100vw"
            height={570}  
            images={images}
            showBullets={true}
            showNavs={true}
          
            />
    </Box>
  );
};

export default MySimpleImageSlider;
