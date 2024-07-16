import React from "react";
import { useParams } from "react-router-dom";
import { combinedData } from "../OurProjectData/ourProjectData";
import "./OurProjectDisplay.css";

function OurProjectDisplay() {
  const { id } = useParams();

  const project = combinedData.find((item) => item.id === parseInt(id));

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="project-detail-container">
      <div className="project-detail-content">
        <div className="heading_project">
          <h1 className="project-detail-title">{project.title}</h1>
        </div>
        <div className="ourprojectDisImage">
          <img
            className="project-detail-img"
            src={project.img}
            alt={project.title}
          />
        </div>
        <div className="project-details">
          <p className="project-detail-description">{project.description}</p>
          <div className="project-extra-details">
            <h3>Project Details</h3>
            <h5>
              <span>Location:</span> {project.location}
            </h5>
            <h5>
              <span>Area:</span> {project.Area}
            </h5>
            <h5>
              <span>Peak Power:</span> {project.Peak_power}
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurProjectDisplay;
