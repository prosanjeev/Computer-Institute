import "./DownFooter.css";
import { Link } from 'react-router-dom';
import { IoIosArrowForward } from "react-icons/io";
import { IoCallOutline } from "react-icons/io5";
import { MdMailOutline } from "react-icons/md";

const DownFooter = () => {
  return (
    <div className="footer-box">  
      <div className="footer-contantant">

        <div className="footer-contact-box">
          <div className="footer-title"> CONTACT US </div>
          <hr className="footer-hr-line" />
          <div className="footer-about">
            M-TECH COMPUTER ACADEMY PVT. LTD., 56/6/510A Unity City Chaurah,
            Bahadurpur Rd, Kalyanpur (West), Patna, Bihar 876543
          </div>
          <div className="contactus-list">
            <div className="contactus-icon-list">
              <IoCallOutline />  9876543210
              </div> 
            <div className="contactus-icon-list">
              <MdMailOutline />  
              Contact@domain.com
              </div> 
          </div>
        </div>
        <div className="useful">
          <div className="footer-title"> USEFUL_LINKS </div>
          <hr className="footer-hr-line" />
          <div className="usefull-list">
            <ul>
              <li><IoIosArrowForward />  <Link to="/">Home</Link>                                            </li>
              <li><IoIosArrowForward />  <Link to="/about-company">About Us</Link>                           </li>
              <li><IoIosArrowForward />  <Link to="/contact-us">Contact Us</Link>                            </li>
              <li><IoIosArrowForward />  <Link to="/student-login">Student Login</Link>                      </li>
              <li><IoIosArrowForward />  <Link to="/student-verification">Student Verification</Link>        </li>
              <li><IoIosArrowForward />  <Link to="/certificate-verification">Certificate Verification</Link> </li>
            </ul>
          </div>
        </div>
        <div className="query">
          <div className="footer-title"> QUERY US </div>
          <hr className="footer-hr-line" />

          <form className="footer-form">
            <input  type="text" placeholder="Your Name" />
            <input type="text" placeholder="Your Mobile No."/>
            <input type="text" placeholder="Your Email" />
            <button> SUBSCRIBE</button>
          </form>
        </div>
      </div>

      <div className="copyright-contant">
          M-TECH COMPUTER ACADEMY PVT. LTD. © 2023 |{" "}
          <a href="#">Privacy Policy</a>
        </div>

      </div>    
  );
};

export default DownFooter;
