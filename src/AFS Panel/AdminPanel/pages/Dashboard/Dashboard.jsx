import { Box, Grid, GridItem, SimpleGrid } from "@chakra-ui/react";
import DashboardLayout from "../../components/DashboardLayout";
import InfoCard from "./components/InfoCard";
// import { dashboardData } from "./data";
import {
  FaCodeBranch,
  FaUserGraduate,
  FaBook,
  FaUserPlus,
  FaUser,
  FaUserTie,
  FaBookOpen,
  FaClipboardList,
  FaChalkboardTeacher,
  FaFileAlt,
  FaFileSignature,
} from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { fetchBranches, selectBranches } from "../../../redux/admin/branchSlice";
import { useEffect } from "react";
import { selectAllCourses, selectStudentsSize } from "../../../redux/course/coursesSelectors";
import { fetchCourses } from "../../../redux/course/coursesActions";
import { selectStudents } from "../../../redux/selectors/franchiseStudentsSelectors";
import { fetchStudents } from "../../../redux/actions/franchiseStudentsActions";
import { selectStudentCoursesSize  } from "../../../redux/selectors/enrollmentSelectors";

const iconMapping = {
  Branch: FaCodeBranch,
  Student: FaUserGraduate,
  Courses: FaBook,
  Admission: FaUserPlus,
  User: FaUser,
  Staff: FaUserTie,
  Subject: FaBookOpen,
  MARKSHEET: FaClipboardList,
  "VI CLASSES": FaChalkboardTeacher,
  "ST MATERIALS": FaFileAlt,
  "News Notice": FaFileSignature,
  SYLLABUS: FaFileAlt,
};

const Dashboard = () => {
  const dispatch = useDispatch();

  const branches = useSelector(selectBranches);
  const students = useSelector(selectStudents);
  const courses = useSelector(selectAllCourses);
  const studentCoursesSize = useSelector(selectStudentCoursesSize);

  useEffect(() => {
    dispatch(fetchBranches());
    dispatch(fetchStudents());
    dispatch(fetchCourses());
  }, [dispatch]);
 

  const dashboardData = [
    {
      name: "Branchs",
      info: branches.length,
      icon: iconMapping["Branch"],
    },
    {
      name: "Students",
      info: students.length,
      icon: iconMapping["Student"],
    },
    {
      name: "Courses",
      info: courses.length,
      icon: iconMapping["Courses"],
    },
    {
      name: "Admission",
      info: studentCoursesSize,
      icon: iconMapping["Admission"],
    },
    {
      name: "User",
      info: "43",
      icon: iconMapping["User"],
    },
    {
      name: "Staff",
      info: "14",
      icon: iconMapping["Staff"],
    },
    {
      name: "Subject",
      info: "22",
      icon: iconMapping["Subject"],
    },
    {
      name: "MARKSHEET",
      info: "653",
      icon: iconMapping["MARKSHEET"],
    },
    {
      name: "VI CLASSES",
      info: "7",
      icon: iconMapping["VI CLASSES"],
    },
    {
      name: "ST MATERIALS",
      info: "16",
      icon: iconMapping["ST MATERIALS"],
    },
    {
      name: "News Notice",
      info: "7",
      icon: iconMapping["News Notice"],
    },
    {
      name: "SYLLABUS",
      info: "11",
      icon: iconMapping["SYLLABUS"],
    },
  ];
  return (
    <DashboardLayout title="Dashboard">
      <Box w="80%" mx="auto" mt={5}>
        <Grid
          gridTemplateColumns={{
            base: "repeat(1, 1fr)",
            xl: "repeat(4, 1fr)",
          }}
          gap="6"
        >
          <GridItem
            colSpan={{
              base: 1,
              xl: 4,
            }}
          >
            <SimpleGrid
              columns={{ base: 1, md: 4 }}
              px={7}
              columnGap={4}
              rowGap={5}
            >
              {dashboardData.map((card) => (
                <InfoCard
                  key={card.name}
                  name={card.name}
                  info={card.info}
                  icon={card.icon}
                />
              ))}
            </SimpleGrid>
          </GridItem>
        </Grid>
      </Box>
    </DashboardLayout>
  );
};

export default Dashboard;
