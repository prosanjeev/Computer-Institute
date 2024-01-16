import AboutBox from "./Components/AboutBox/AboutBox";
import MySimpleImageSlider from "./Components/ImageSlider/MySimpleImageSlider";
import ImageBoxes from "./Components/ImageBoxes/ImageBoxes";
import EventBox from "./Components/EventBoxes/EventBox";
import HeadingWithHr from "../../components/PagesComponents/HeadingWithHr/HeadingWithHr";
import IconBoxes from "./Components/IconBoxes/IconBoxes";


const Home = () => {
  return (
    <>
      <MySimpleImageSlider/>
      <AboutBox />
      <EventBox />
      <HeadingWithHr heading="Our Programmes"/>
      <ImageBoxes />
      <HeadingWithHr heading="SERVICES" text="Take advantage of the latest web & software technologies using our high quality services."/>
      <IconBoxes/>
    </>
  );
};

export default Home;
