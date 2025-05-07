import "../styles/ServiceCard.css";

import React from "react";

const ServiceCard = ({ title, description, showButton, onButtonClick }) => {
  return (
    <div className="service-card">
      <h3>{title}</h3>
      <p>{description}</p>
      {showButton && (
        <button className="service-card-button" onClick={onButtonClick}>
          Learn More
        </button>
      )}
    </div>
  );
};

export default ServiceCard;
