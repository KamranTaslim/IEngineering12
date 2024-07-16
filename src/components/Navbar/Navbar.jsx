import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets";
import { Link, Outlet, useLocation } from "react-router-dom";

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;
    const servicesPaths = [
      "/services/null",
      "/services/0",
      "/services/1",
      "/services/2",
      "/services/3",
      "/services/4",
      "/services/5",
      "/services/6",
      "/services/7",
    ];

    const projectsPaths = [
      "/projects/null",
      "/projects/0",
      "/projects/1",
      "/projects/2",
    ];

    if (path === "/") {
      setMenu("home");
    } else if (servicesPaths.includes(path)) {
      setMenu("services");
    } else if (projectsPaths.includes(path)) {
      setMenu("projects");
    } else if (path === "/ContactUs") {
      setMenu("contact-us");
    }
  }, [location.pathname]);

  const menuItems = [
    { name: "home", label: "Home", path: "/" },
    { name: "services", label: "Services", path: "/services/null" },
    { name: "projects", label: "Projects", path: "/projects/null" },
    { name: "contact-us", label: "Contact Us", path: "/ContactUs" },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <div className="navbar">
        <Link to="/">
          <img src={assets.logo} alt="Logo" className="logo" />
        </Link>
        <button className="mobile-menu-button" onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? "✕" : "☰"}
        </button>
        <ul className={`navbar-menu ${isMobileMenuOpen ? "open" : ""}`}>
          {menuItems.map((item) => (
            <Link to={item.path} key={item.name}>
              <li
                onClick={() => {
                  setMenu(item.name);
                  setIsMobileMenuOpen(false); // Close mobile menu on item click
                }}
                className={menu === item.name ? "active" : ""}
              >
                {item.label}
              </li>
            </Link>
          ))}
        </ul>
      </div>
      <Outlet />
    </>
  );
};

export default Navbar;
