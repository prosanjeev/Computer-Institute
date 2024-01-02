import AboutBox from "../../components/PagesComponents/AboutBox/AboutBox";
import MySimpleImageSlider from "../../components/PagesComponents/ImageSlider/MySimpleImageSlider";
import ImageBoxes from "../../components/PagesComponents/ImageBoxes/ImageBoxes";
import EventBox from "./EventBoxes/EventBox";
import HeadingWithHr from "../../components/PagesComponents/HeadingWithHr/HeadingWithHr";
import IconBoxes from "./IconBoxes/IconBoxes";


const Home = () => {
  return (
    <>
      <div className="home-imageSlider-and-aboutbox">
      <MySimpleImageSlider/>
      </div>
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
