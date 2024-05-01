import AboutBox from "./Components/AboutBox/AboutBox";
// import MySimpleImageSlider from "./Components/ImageSlider/MySimpleImageSlider";
import EventBox from "./Components/EventBoxes/EventBox";
import HeadingWithHr from "../../components/PagesComponents/HeadingWithHr/HeadingWithHr";
import IconBoxes from "../services/components/IconBoxes";
import ImageBoxGrid from "./Components/ImageBoxes/ImageBoxGrid";
import SimpleImageSlider from "./Components/ImageSlider/SimpleImageSlider";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import {
  fetchLatestBranches,
  selectBranches,
} from "../../AFS Panel/redux/admin/branchSlice";
import { selectStudents } from "../../AFS Panel/redux/selectors/franchiseStudentsSelectors";
import { fetchLatestStudents } from "../../AFS Panel/redux/actions/franchiseStudentsActions";
import { fetchUserNotifications, selectNotifications } from "../../AFS Panel/redux/notifications/userNotificationsSlice";
import AuthorizedLocationsScroll from "./Components/AuthorizedLogoScroll/AuthorizedLogoScroll";
import { Box } from "@chakra-ui/react";

const Home = () => {
  const latestBranches = useSelector(selectBranches);
  const latestStudents = useSelector(selectStudents);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchLatestBranches());
    dispatch(fetchLatestStudents());
  }, [dispatch]);

  
  useEffect(() => {
    dispatch(fetchUserNotifications());
  }, [dispatch]);
  
  const notifications = useSelector(selectNotifications);

  return (
    <>
      <SimpleImageSlider />
      <AboutBox />
      <EventBox branchData={latestBranches} studentData={latestStudents} notifications={notifications}/>
      <HeadingWithHr heading="Our Programmes" />
      <ImageBoxGrid />

      {/* <HeadingWithHr
        heading="SERVICES"
        text="Take advantage of the latest web & software technologies using our high quality services."
      />
      <IconBoxes /> */}
      <Box borderTop='1px solid #d4cfcf' mt={10}>
      <AuthorizedLocationsScroll/>
      </Box>
    </>
  );
};

export default Home;
