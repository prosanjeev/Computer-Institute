import TopHeader from "../Header/TopHeader";
import { Outlet } from "react-router-dom";
import DownFooter from "../Footer/DownFooter";
import NAvBarNew from "../Header/NavBar/NAvBarNew";

const MainLayout = () => {
  return (
    <>
      <TopHeader />
      <NAvBarNew />
      <Outlet />
      <DownFooter />
    </>
  );
};

export default MainLayout;
