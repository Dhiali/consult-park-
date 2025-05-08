import React from 'react';
import { FaCheckCircle, FaRegCommentDots, FaGraduationCap, FaBuilding, FaHourglassHalf, FaChartLine, FaEnvelope } from 'react-icons/fa'; // Import icons
import '../styles/HomePageCard.css'; // Import the styles for the homepage cards

const HomePageCard = ({ title, description, showIcon, customIcon, button }) => {
  return (
    <div className="homepage-card">
      {showIcon && <FaCheckCircle className="homepage-card-icon" />} {/* Checkmark icon */}
      {customIcon === 'comment' && <FaRegCommentDots className="homepage-card-icon" />} {/* Comment icon */}
      {customIcon === 'graduation' && <FaGraduationCap className="homepage-card-icon" />} {/* Graduation cap icon */}
      {customIcon === 'building' && <FaBuilding className="homepage-card-icon" />} {/* Office building icon */}
      {customIcon === 'hourglass' && <FaHourglassHalf className="homepage-card-icon" />} {/* Hourglass icon */}
      {customIcon === 'chart' && <FaChartLine className="homepage-card-icon" />} {/* Chart icon */}
      {customIcon === 'mail' && <FaEnvelope className="homepage-card-icon" />} {/* Mail icon */}
      <h4 className="homepage-card-title">{title}</h4>
      <p className="homepage-card-description">{description}</p>
      {button && (
        <a
          href="/contact"
          className="btn btn-success px-4 py-2 rounded-full text-white bg-lime-300 hover:bg-lime-500 transition"
        >
          Contact Us
        </a>
      )}
    </div>
  );
};

export default HomePageCard;
