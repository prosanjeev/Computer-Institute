import { RxDashboard } from "react-icons/rx";
import { FaRegUser } from "react-icons/fa";
import { CiWallet } from "react-icons/ci";
import { PiStudent } from "react-icons/pi";
import { SiCoursera } from "react-icons/si";
import { TbReportSearch } from "react-icons/tb";
import { GrCloudComputer } from "react-icons/gr";
import { CgWebsite } from "react-icons/cg";

export const stSideNavLinks = [
    {
      icon: RxDashboard,
      text: "Dashboard",
      link: "/student-dashboard",
    },
    {
      icon: FaRegUser,
      text: "Profile",
      link: "/transactions",
    },
    
    {
      icon: CiWallet,
      text: "E Books",
      link: "/transactions",
    },
    {
      icon: PiStudent,
      text: "Practice Test",
      link: "/practice-test",
    },
    {
      icon: SiCoursera,
      text: "Main Test",
      link: "/transactions",
    },
    {
      icon: TbReportSearch,
      text: "Report",
      link: "/transactions",
    },
    {
      icon: GrCloudComputer,
      text: "Online Exam",
      link: "/transactions",
    },
    {
      icon: GrCloudComputer,
      text: "Icard",
      link: "/id-card",
    },
    {
      icon: CgWebsite,
      text: "Notice",
      link: "/transactions",
    },
   
  ];