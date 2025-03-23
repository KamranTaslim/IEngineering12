import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Footer.css";
import { assets } from "../../assets/assets";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faPinterestP,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    comment: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://iengineeringbackend.onrender.com/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success("Thank you for contacting us!");
        setFormData({ fullName: "", email: "", comment: "" });
      } else {
        toast.error("Failed to send email. Please try again later.");
      }
    } catch (error) {
      console.error("Error sending email:", error);
      toast.error("An error occurred. Please try again later.");
    }
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo-section">
          <img src={assets.logo} alt="footer_logo" className="footer-logo" />
          <p className="footer-text">
            iEngineering Power Pvt Ltd (iEng) Solutions is a leading provider of
            electrical engineering services, dedicated to delivering innovative
            solutions across a wide range of industries, of relevant hands-on
            engineering experience at a senior level across multiple power
            industry sectors in Australia and internationally.
          </p>
          <div className="footer-socials">
            <FontAwesomeIcon
              icon={faFacebookF}
              className="footer-social-icon"
            />
            <FontAwesomeIcon icon={faTwitter} className="footer-social-icon" />
            <FontAwesomeIcon
              icon={faPinterestP}
              className="footer-social-icon"
            />
            <FontAwesomeIcon icon={faYoutube} className="footer-social-icon" />
          </div>
          <p className="footer-privacy">
            Privacy Policy | © {new Date().getFullYear()}iEngineering <br />{" "}
            Design by
            <span> ADKT </span>
          </p>
        </div>
        <span></span>
        <div>
          <form className="form-container" onSubmit={handleSubmit}>
            <h3 className="form-heading">Contact Us</h3>
            <span className="form-highlight"></span>
            <input
              className="form-input"
              placeholder="Full Name *"
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
            <input
              className="form-input"
              placeholder="Email Address *"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <textarea
              placeholder="Comment"
              className="form-textarea"
              name="comment"
              value={formData.comment}
              onChange={handleChange}
              required
            />
            <button type="submit" className="form-button">
              Submit Now
            </button>
          </form>
        </div>
      </div>
      <ToastContainer />
    </footer>
  );
}

export default Footer;
