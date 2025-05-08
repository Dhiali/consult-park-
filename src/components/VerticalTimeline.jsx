import React from 'react';
import { FaRegCircle, FaRegDotCircle, FaRegCheckCircle } from 'react-icons/fa'; // Import numbered icons
import '../styles/VerticalTimeline.css';

const VerticalTimeline = () => {
  const timelinePoints = [
    {
      icon: '1', // Icon for 1st
      description: 'Consultation - Tell us what you need, and we’ll customize a solution for you.',
    },
    {
      icon: '2', // Icon for 2nd
      description: 'Talent Matching – We handpick the best professionals to suit your requirements.',
    },
    {
      icon: '3', // Icon for 3rd
      description: 'Onboarding & Integration – Your team is seamlessly integrated into your operations.',
    },
    {
        icon: '4', // Icon for 4th
        description: 'Ongoing Support & Optimization – We ensure continued efficiency and performance.',
      },
  ];

  return (
    <div className="vertical-timeline">
      <div className="timeline-header">
        <span className="timeline-label">Seamless Outsourcing in 4 Simple Steps</span>
        <h2 className="timeline-title">How it works</h2>
      
      </div>
      <div className="timeline-content">
        {timelinePoints.map((point, index) => (
          <div key={index} className="timeline-point">
            <div className="timeline-rank">{point.icon}</div> {/* Use icon instead of text */}
            <div className="timeline-description">{point.description}</div>
            {index < timelinePoints.length - 1 && <hr className="timeline-divider" />}
          </div>
        ))}
      </div>
      <div className="timeline-button text-center mt-40"> {/* Increased margin-top */}
        <a
          href="/contact"
          className="btn btn-success px-4 py-2 rounded-full text-white bg-lime-200 hover:bg-lime-500 transition"
        >
          📩 Ready to Get Started? | Book a Free Consultation
        </a>
      </div>
    </div>
  );
};

export default VerticalTimeline;
