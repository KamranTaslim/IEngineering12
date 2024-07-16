import React, { useEffect, useState } from "react";
import "./OurProject.css";
import { combinedData } from "./OurProjectData/ourProjectData";
import { Projects_Display_data } from "../../assets/assets";
import { Link, useParams } from "react-router-dom";

function OurProject() {
  const { id } = useParams();
  const [selectedProject, setSelectedProject] = useState(null);
  const [choice, setChoice] = useState();

  function redirect(id) {
    setSelectedProject(id);
  }

  useEffect(() => {
    const element = document.getElementById(id);
    if (element) {
      element.classList.add("active");
    }

    // Set the choice based on the id

    if (id === "0" || id == "null") {
      setChoice("solar");
    } else {
      const selectedCard = Projects_Display_data.find(
        (card, index) => index.toString() === id
      );
      if (selectedCard) {
        setChoice(selectedCard.type);
      }
    }
  }, [id]);

  const filteredData = combinedData.filter((item) => item.type === choice);

  useEffect(() => {
    window.scrollTo({
      top: 40, // Scroll down by 40 pixels
      behavior: "smooth", // Smooth scrolling
    });
  }, []);

  return (
    <>
      <div className="header_image">
        <img
          src="https://img.freepik.com/free-photo/photovoltaic-solar-power-panel-field-green-clean-alternative-power-energy-concept-ai-generative_123827-23424.jpg?t=st=1719307284~exp=1719310884~hmac=cef8091b951eedd9c9667cc319cafef5b8be86ee3639490c8d45d4427b5e3f8a&w=740"
          alt=""
        />
        <h1 className="heading_title">Our Projects</h1>
      </div>
      <div className="ourproject_container">
        {Projects_Display_data.map((card, id) => (
          <div
            key={id}
            className="ourProject-item-div"
            onClick={() => redirect(id)}
          >
            <button
              id={id}
              onClick={() => setChoice(card.type)}
              className={`OurP_button ${choice === card.type ? "active" : ""}`}
            >
              {card.title}
            </button>
          </div>
        ))}
      </div>
      <div className="project-list">
        {filteredData.map((project) => (
          <div
            key={project.id}
            className="project-item"
            onClick={() => redirect(project.id)}
          >
            <Link to={`/ourprojectdetails/${project.id}`}>
              <img className="ourP_img" src={project.img} alt={project.title} />
              <h3 className="ourP_title">{project.title}</h3>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}

export default OurProject;
