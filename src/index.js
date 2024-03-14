import React from 'react';
import { ChakraProvider } from '@chakra-ui/react'
import ReactDOM from 'react-dom/client';
import { theme } from './theme'
import App from './App';
import { Provider } from 'react-redux';
import store from './redux/store';



// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <>
//       <Route path='/' element={<MainLayout />}>
//         <Route path='' element={<Home />} />
//         <Route path='about-company' element={<AboutCompany />} />
//         <Route path='chairman-message' element={<ChairmanMessage />} />
//         <Route path='our-vision-and-mission' element={<OurVisionAndMission />} />
//         <Route path='our-goal' element={<OurGoal />} />

//         <Route path='basic-courses' element={<BasicCourses />} />
//         <Route path='diploma-courses' element={<DiplomaCourses />} />
//         <Route path='language-courses' element={<LanguageCourses />} />
//         <Route path='professional-courses' element={<ProfessionalCourses />} />

//         <Route path='student-registration' element={<StudentRegistration />} />
//         <Route path='student-verification' element={<StudentVerification />} />
//         <Route path='student-login' element={<StudentLogin />} />
//         <Route path='admit-card' element={<AdmitCard />} />
//         <Route path='certificate-verification' element={<CertificateVerification />} />

//         <Route path='franchise-enquiry' element={<ApplyOnline />} />
//         <Route path='center-verification' element={<CenterVerification />} />

//         <Route path='photos' element={<Photos />} />
//         <Route path='videos' element={<Videos />} />

//         <Route path='contact-us' element={<ContactUs />} />
//         <Route path='find-branch' element={<FindBranch />} />
//         <Route path='our-team' element={<OurTeam />} />
//       </Route>

//       {/* AdminPanel */}
//       <Route path='dashboard' element={<Dashboard />} />
//       <Route path='support' element={<Support />} />

//       <Route path='franchise-dashboard' element={<FranchiseDashboard />} />
//       <Route path='student-dashboard' element={<StudentDashboard />} />
//       <Route path='practice-test' element={<PracticeTest />} />
//     </>
//   )
// )

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      {/* <RouterProvider router={router} /> */}
      <Provider store={store}>
    <App />
  </Provider>,
    </ChakraProvider>
  </React.StrictMode>
);



