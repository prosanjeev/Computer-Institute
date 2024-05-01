import React from "react";
import IconBoxes from "./components/IconBoxes";
import HeadingWithHr from "../../components/PagesComponents/HeadingWithHr/HeadingWithHr";
import PageTitle from "../../components/PagesComponents/PageTitleSection/PageTitle";

const SerivicesGrid = () => {
  return (
    <>
      <PageTitle pagetitle="All Services" />

      <HeadingWithHr
        heading="SERVICES"
        text="Take advantage of the latest web & software technologies using our high quality services."
      />
      <IconBoxes />
    </>
  );
};

export default SerivicesGrid;
