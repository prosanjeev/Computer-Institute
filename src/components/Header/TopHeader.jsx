import React from "react";
import "./TopHeader.css";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoIosCall } from "react-icons/io";

function TopHeader() {
  return (
    <div>
    <div className="top-container">
        <div className="top-container-contant">
      <div className="top-container-buttons">
        <button>Enquiry Here</button>
        <button>Student Registration</button>
        <button>Student Login</button>
        <button>Franchise Details</button>
        <button>Apply Franchise</button>
        <button>Franchise Login</button>
      </div>

      <div className="top-container-icons">
        <div className="top-container-number">  <IoIosCall /><p>9876543210</p></div>
        <div className="icon"> <FaFacebookF /></div>
        <div className="icon"> <FaTwitter /></div>
        <div className="icon"> <FaYoutube /> </div>
        <div className="icon"> <FaLinkedin /> </div>
      </div>
    </div>
    </div>
      <div className="top-container-img">
        <img src="/topimg.png" alt="" />
      </div> 
    
    </div>
  );
}
export default TopHeader;
