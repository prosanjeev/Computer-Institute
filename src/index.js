import React from 'react';
import { ChakraProvider } from '@chakra-ui/react'
import ReactDOM from 'react-dom/client';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import MainLayout from './MainLayout'
import AboutCompany from './Pages/About/AboutCompany'
import Home from './Pages/Home/Home'
import ChairmanMessage from './Pages/About/ChairmanMessage';
import OurVisionAndMission from './Pages/About/OurVisionAndMission';
import OurGoal from './Pages/About/OurGoal';
import BasicCourses from './Pages/Courses/BasicCourses';
import DiplomaCourses from './Pages/Courses/DiplomaCourses';
import LanguageCourses from './Pages/Courses/LanguageCourses';
import ProfessionalCourses from './Pages/Courses/ProfessionalCourses';
import StudentRegistration from './Pages/Student Zone/StudentRegistration';
import StudentVerification from './Pages/Student Zone/StudentVerification';
import StudentLogin from './Pages/Student Zone/StudentLogin';
import AdmitCard from './Pages/Student Zone/AdmitCard';
import CertificateVerification from './Pages/Student Zone/CertificateVerification';
import ApplyOnline from './Pages/Franchise/ApplyOnline';
import CenterVerification from './Pages/Franchise/CenterVerification';
import Photos from './Pages/Gallary/Photos';
import Videos from './Pages/Gallary/Videos';
import ContactUs from './Pages/Contact/ContactUs';
import FindBranch from './Pages/Contact/FindBranch';
import OurTeam from './Pages/Contact/OurTeam';
import { theme } from './theme'
import Dashboard from './AdminPanel/pages/Dashboard/Dashboard';
import FranchiseDashboard from './FranchisePanel/pages/Dashboard/FranchiseDashboard';
import StudentDashboard from './StudentPanel/pages/Dashboard/StudentDashboard';
import PracticeTest from './StudentPanel/pages/PracticeTest/PracticeTest';
import Support from './AdminPanel/pages/Support/Support';
import App from './App';



const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/' element={<MainLayout />}>
        <Route path='' element={<Home />} />
        <Route path='about-company' element={<AboutCompany />} />
        <Route path='chairman-message' element={<ChairmanMessage />} />
        <Route path='our-vision-and-mission' element={<OurVisionAndMission />} />
        <Route path='our-goal' element={<OurGoal />} />

        <Route path='basic-courses' element={<BasicCourses />} />
        <Route path='diploma-courses' element={<DiplomaCourses />} />
        <Route path='language-courses' element={<LanguageCourses />} />
        <Route path='professional-courses' element={<ProfessionalCourses />} />

        <Route path='student-registration' element={<StudentRegistration />} />
        <Route path='student-verification' element={<StudentVerification />} />
        <Route path='student-login' element={<StudentLogin />} />
        <Route path='admit-card' element={<AdmitCard />} />
        <Route path='certificate-verification' element={<CertificateVerification />} />

        <Route path='franchise-enquiry' element={<ApplyOnline />} />
        <Route path='center-verification' element={<CenterVerification />} />

        <Route path='photos' element={<Photos />} />
        <Route path='videos' element={<Videos />} />

        <Route path='contact-us' element={<ContactUs />} />
        <Route path='find-branch' element={<FindBranch />} />
        <Route path='our-team' element={<OurTeam />} />
      </Route>

      {/* AdminPanel */}
      <Route path='dashboard' element={<Dashboard />} />
      <Route path='support' element={<Support />} />

      <Route path='franchise-dashboard' element={<FranchiseDashboard />} />
      <Route path='student-dashboard' element={<StudentDashboard />} />
      <Route path='practice-test' element={<PracticeTest />} />
    </>
  )
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      {/* <RouterProvider router={router} /> */}
      <App />
    </ChakraProvider>
  </React.StrictMode>
);



