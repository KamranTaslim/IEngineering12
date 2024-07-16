import React from "react";
import "./ContactUs.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { cleans } from "./images/contactUs";

function ContactUs() {
  return (
    <>
      <div className="header_image">
        <img
          src="https://img.freepik.com/free-photo/photovoltaic-solar-power-panel-field-green-clean-alternative-power-energy-concept-ai-generative_123827-23424.jpg?t=st=1719307284~exp=1719310884~hmac=cef8091b951eedd9c9667cc319cafef5b8be86ee3639490c8d45d4427b5e3f8a&w=740"
          alt=""
        />
        <h1 className="heading_title">Contact Us</h1>
      </div>
      <div className="main-contactUs">
        <div className="design-contactUs"></div>
      </div>
      <p className="contactUs_para">
        We appreciate your interest in iEngineering. Please contact us via the
        form below, and we'll respond promptly. Ensuring your satisfaction is
        our top priority. iEngineering Power Pvt Ltd (iEng) Solutions is a
        premier provider of electrical engineering services, committed to
        offering cutting-edge solutions across various industries. Our
        senior-level experts bring extensive practical experience in numerous
        power industry sectors, both in Australia and internationally.
      </p>
      <div className="contactUs_section">
        <div className="clean_img">
          <img src={cleans} alt="" />
        </div>
        <div className="contactUs_icons">
          <div className="icon-text">
            <FontAwesomeIcon
              className="icons"
              icon={faUser}
              style={{ color: "#388087" }}
            />
            <span>Ravi Dhuria</span>
          </div>
          <div className="icon-text">
            <FontAwesomeIcon
              className="icons"
              icon={faPhone}
              style={{ color: "#388087" }}
            />
            <span>+91 9969575571</span>
          </div>
          <div className="icon-text">
            <FontAwesomeIcon
              className="icons"
              icon={faGlobe}
              style={{ color: "#388087" }}
            />
            <span>ravi.d@iengineering.co.in</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactUs;
