import { RxDashboard } from "react-icons/rx";
import { FaRegUser } from "react-icons/fa";
import { IoIosGitBranch } from "react-icons/io";
import { CiWallet } from "react-icons/ci";
import { PiStudent } from "react-icons/pi";
import { SiCoursera } from "react-icons/si";
import { TbReportSearch } from "react-icons/tb";
import { FaUserTie } from "react-icons/fa";
import { GrCloudComputer } from "react-icons/gr";
import { CgWebsite } from "react-icons/cg";
import { MdOutlineNotificationsActive } from "react-icons/md";
import { VscCommentUnresolved } from "react-icons/vsc";

export const navLinks = [
    {
      icon: RxDashboard,
      text: "Dashboard",
      link: "/franchise-dashboard",
    },
    {
      icon: FaRegUser,
      text: "Profile",
      link: "/franchise-profile",
    },
    
    {
      icon: CiWallet,
      text: "My Wallet",
      link: "/wallet-recharge",
    },
    {
      icon: PiStudent,
      text: "Student",
      link: "#",
      submenu: [
        {
          text: "Add Student",
          link: "/add-student",
        },
        {
          text: "View Students",
          link: "#",
        },
        {
          text: "View Students List",
          link: "/students-list",
        },
      ],
    },
    {
      icon: SiCoursera,
      text: "Courses",
      link: "/transactions",
      submenu: [
        {
          text: "Add Course",
          link: "/student/add",
        },
        {
          text: "View Course",
          link: "/student/view",
        },
      ],
    },
    {
      icon: TbReportSearch,
      text: "Report",
      link: "/transactions",
    },
    {
      icon: FaUserTie,
      text: "Staff",
      link: "/transactions",
    },
    {
      icon: GrCloudComputer,
      text: "Online Exam",
      link: "/transactions",
    },
    {
      icon: GrCloudComputer,
      text: "Products",
      link: "/transactions",
    },
    {
      icon: VscCommentUnresolved ,
      text: "Manage Queries",
      link: "/transactions",
    },
    {
      icon: CgWebsite,
      text: "Notice Admin",
      link: "/transactions",
    },
    {
      icon: CgWebsite,
      text: "Authorisation Certificate",
      link: "/authorisation-certificate",
    },
  ];


