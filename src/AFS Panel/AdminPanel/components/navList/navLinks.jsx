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
      link: "#",
    },
    {
      icon: IoIosGitBranch,
      text: "Manage Branch",
      link: "#",
      submenu: [
        {
            icon: IoIosGitBranch,
          text: "Add Center",
          link: "/add-branch",
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
      link: "/branch-wallet",
    },
    {
      icon: PiStudent,
      text: "Student",
      link: "#",
      submenu: [
        {
          text: "Add Student",
          link: "#",
        },
        {
          text: "View Students",
          link: "#",
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
      link: "#",
      submenu: [
        {
          text: "Add Course",
          link: "/add-course",
        },
        {
          text: "Course Category",
          link: "/course-category",
        },
        {
          text: "View Course",
          link: "/all-courses",
        },
      ],
    },
    {
      icon: TbReportSearch,
      text: "Report",
      link: "#",
    },
    {
      icon: FaUserTie,
      text: "Staff",
      link: "#",
    },
    {
      icon: GrCloudComputer,
      text: "Online Exam",
      link: "#",
    },
    {
      icon: CgWebsite,
      text: "Manage Website",
      link: "#",
    },
    {
      icon: VscCommentUnresolved ,
      text: "Manage Queries",
      link: "/contact-us-query",
    },
    {
      icon: MdOutlineNotificationsActive,
      text: "Send Notification ",
      link: "/user-notice",
    },
  ];