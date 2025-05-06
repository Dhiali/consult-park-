import React from 'react';
import './InfoSection.css';

function InfoSection() {
  return (
    <section className="d-flex justify-content-between p-5 text-light">
      <div className="info-card">01. Service for Any Level of Expertise.</div>
      <div className="info-card highlighted">02. Industry best practices.</div>
      <div className="info-card">03. Protected by Insurance.</div>
    </section>
  );
}

export default InfoSection;
