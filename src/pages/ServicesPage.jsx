import "../styles/ServicePage.css";

import React, { useState } from "react";

import Modal from "../components/Modal";
import ServiceCard from "../components/ServiceCard";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation

const ServicesPage = () => {
  const [activeModal, setActiveModal] = useState(null);
  const navigate = useNavigate(); // Initialize navigation

  const services = [
    {
      id: 1,
      title: "Virtual Staffing Solutions",
      description: "Scale smart with global talent.",
      details: "Our virtual staffing solutions help you scale your business by providing access to skilled global talent, reducing costs, and increasing efficiency.",
    },
    {
      id: 2,
      title: "Admin Support",
      description: "Focus on growth, we’ll handle the details.",
      details: "Our admin support services ensure your day-to-day operations run smoothly, allowing you to focus on growing your business.",
    },
    {
      id: 3,
      title: "Sales & Lead Generation",
      description: "Drive revenue with targeted outreach.",
      details: "We help you generate high-quality leads and drive revenue through targeted sales strategies and outreach campaigns.",
    },
    {
      id: 4,
      title: "Accounting & Bookkeeping",
      description: "Keep your finances in perfect order.",
      details: "Our accounting and bookkeeping services ensure your financial records are accurate and up-to-date, giving you peace of mind.",
    },
    {
      id: 5,
      title: "Social Media & Digital Marketing",
      description: "Build your online presence with impact.",
      details: "We create impactful social media and digital marketing strategies to help you build a strong online presence.",
    },
  ];

  const openModal = (id) => setActiveModal(id);
  const closeModal = () => setActiveModal(null);

  return (
    <div className="servicePage">
      <div className="services-intro">
        <h1>Our Services</h1>
        <p>
          We offer a wide range of services to help your business grow and
          succeed. From virtual staffing to digital marketing, we have you
          covered!
        </p>
      </div>

      <div className="cards">
        {services.map((service) => (
          <ServiceCard
            key={service.id}
            title={service.title}
            description={service.description}
            showButton={true}
            onButtonClick={() => openModal(service.id)}
          />
        ))}

        {/* Contact Card */}
        <ServiceCard
          title="Contact Us"
          description="Have questions? Get in touch with us today!"
          showButton={true}
          onButtonClick={() => navigate("/contact")} // Navigate to the contact page
        />
      </div>

      {services.map((service) => (
        <Modal
          key={service.id}
          isOpen={activeModal === service.id}
          onClose={closeModal}
          title={service.title}
          content={service.details}
        />
      ))}
    </div>
  );
};

export default ServicesPage;