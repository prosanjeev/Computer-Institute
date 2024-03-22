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
      link: "/dashboard",
    },
    {
      icon: FaRegUser,
      text: "Profile",
      link: "/transactions",
    },
    {
      icon: IoIosGitBranch,
      text: "Manage Branch",
      link: "/transactions",
      submenu: [
        {
            icon: IoIosGitBranch,
          text: "Add Center",
          link: "/student",
        },
        {
          text: "View Center List",
          link: "/branch",
        },
      ],
    },
    {
      icon: CiWallet,
      text: "Branch Wallet",
      link: "/transactions",
    },
    {
      icon: PiStudent,
      text: "Student",
      link: "#",
      submenu: [
        {
          text: "Add Student",
          link: "/student/add",
        },
        {
          text: "View Students",
          link: "/student/view",
        },
        {
          text: "View Students List",
          link: "/student",
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
          text: "Course Category",
          link: "/course-category",
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
      icon: CgWebsite,
      text: "Manage Website",
      link: "/transactions",
    },
    {
      icon: VscCommentUnresolved ,
      text: "Manage Queries",
      link: "/contact-us-query",
    },
    {
      icon: MdOutlineNotificationsActive,
      text: "Send Notification ",
      link: "/transactions",
    },
  ];