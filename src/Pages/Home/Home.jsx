import AboutBox from "./Components/AboutBox/AboutBox";
// import MySimpleImageSlider from "./Components/ImageSlider/MySimpleImageSlider";
import EventBox from "./Components/EventBoxes/EventBox";
import HeadingWithHr from "../../components/PagesComponents/HeadingWithHr/HeadingWithHr";
import IconBoxes from "./Components/IconBoxes/IconBoxes";
import ImageBoxGrid from "./Components/ImageBoxes/ImageBoxGrid";
import SimpleImageSlider from "./Components/ImageSlider/SimpleImageSlider";

const Home = () => {
  return (
    <>
      <SimpleImageSlider/>
      <AboutBox />
      <EventBox />
      <HeadingWithHr heading="Our Programmes"/>
      <ImageBoxGrid />
      <HeadingWithHr heading="SERVICES" text="Take advantage of the latest web & software technologies using our high quality services."/>
      <IconBoxes/>
    </>
  );
};

export default Home;
