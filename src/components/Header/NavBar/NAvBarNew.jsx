import React from 'react'
import './NavbarNew.css'
import { Link } from 'react-router-dom';
import { IoIosArrowDown } from "react-icons/io";

function NAvBarNew() {
  return (
    <header className='Header-main'>
  <nav className='nav-menu'>
    <ul className="navigation-menu">
      <li><Link to="/">Home</Link></li> 
      <li><Link to="#">ABOUT US<IoIosArrowDown /></Link>
        <ul>
          <li><Link to="/about-company">About M-TECH</Link>  </li>
          <li><Link to="/chairman-message">Chairman Message</Link>  </li>
          <li><Link to="/our-vision-and-mission">Our Vision & Mission</Link>  </li>
          <li><Link to="/our-goal">Our Goal</Link>  </li>
        </ul>
      </li>
      <li><Link to="#">COURSES<IoIosArrowDown /></Link>
      <ul>
          <li><Link to="/basic-courses">BASIC COURSES</Link>  </li>
          <li><Link to="/diploma-courses">Diploma Course</Link>  </li>
          <li><Link to="/language-courses">Language Course</Link>  </li>
          <li><Link to="/professional-courses">Professional Courses</Link>  </li>
        </ul>
      </li>

      
      <li><Link to="#">STUDENT ZONE<IoIosArrowDown /></Link>
        <ul>
          <li><Link to="/student-registration">Student Registration</Link>  </li>
          <li><Link to="/student-verification">Student Verification</Link>  </li>
          <li><Link to="/student-login">Student Login</Link>  </li>
          <li><Link to="/admit-card">Admit Card</Link>  </li>
          <li><Link to="/certificate-verification">Certificate Verification</Link>  </li>
        </ul>
      </li>
      <li><Link to="#">FRANCHISE<IoIosArrowDown /></Link>
        <ul>
        <li><Link to="/franchise-enquiry">Apply Online</Link>  </li>
        <li><Link to="/center-verification">Center Verification</Link>  </li>
        </ul>
      </li>
      <li><Link to="#">Gallary<IoIosArrowDown /></Link>
        <ul>
        <li><Link to="/Photos">Photos</Link>  </li>
        <li><Link to="/videos">Videos</Link>  </li>
        </ul>
      </li>
      <li><Link to="#">LOGIN<IoIosArrowDown /></Link>
        <ul>
        <li><Link to="/about-company">Admin Login</Link>  </li>
        <li><Link to="/chairman-message">Franchise Login</Link>  </li>
        <li><Link to="/chairman-message">Employee Login</Link>  </li>
        </ul>
      </li>           
      <li><Link to="#">CONTACT<IoIosArrowDown /></Link>
        <ul>
        <li><Link to="/contact-us">Contact Us</Link>  </li>
        <li><Link to="/find-branch">Find Branch</Link>  </li>
        <li><Link to="/our-team">Our Team</Link>  </li>
        </ul>
      </li>           
    </ul>
  </nav>

  {/* <div class="btn-outer">
    <a Link to="#" class="quote-btn"><span >Apply Franchise</span> </a>
    </div> */}
</header>
  )
}

export default NAvBarNew