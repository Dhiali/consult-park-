import React from 'react';
import { Link } from 'react-router-dom';
import ServiceCard from '../components/ServiceCard.jsx';
import '../styles/BPOPage.css';

const bpoSolutions = [
  {
    title: 'Call Center & Help Desk Support',
    description: '24/7 customer service and technical help desk solutions that enhance client satisfaction and retention.',
  },
  {
    title: 'Back-Office & Data Processing',
    description: 'Accurate data entry, record maintenance, and admin tasks to support seamless backend operations.',
  },
  {
    title: 'Technical Support',
    description: 'Expert IT support for troubleshooting, system maintenance, and software assistance.',
  },
  {
    title: 'HR & Payroll Management',
    description: 'End-to-end HR functions, from onboarding to payroll and benefits administration.',
  },
];

const businessOptimization = [
  {
    title: 'Workflow Automation & Efficiency Audits',
    description: 'Analyze and automate repetitive processes to boost performance and reduce human error.',
  },
  {
    title: 'Remote Workforce Strategy',
    description: 'Build, scale, and manage high-performing remote teams with expert guidance.',
  },
  {
    title: 'Custom Business Solutions',
    description: 'Tailored outsourcing strategies designed to fit your unique business needs.',
  },
];

const BPOPage = () => {
  return (
    <div className="bpo-page">
      <h1>Business Process Outsourcing</h1>
      <p>Outsource non-core business functions and focus on growth.</p>

      <section className="bpo-section">
        <h2>BPO Solutions</h2>
        <div className="bpo-grid">
          {bpoSolutions.map((service, idx) => (
            <ServiceCard key={idx} title={service.title} description={service.description} />
          ))}
        </div>
      </section>

      <section className="bpo-section">
        <h2>Business Optimization</h2>
        <div className="bpo-grid">
          {businessOptimization.map((service, idx) => (
            <ServiceCard key={idx} title={service.title} description={service.description} />
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <div className="bpo-cta">
        <h2>📩 Get a Free Consultation</h2>
        <Link to="/contact" className="cta-button">Contact Us</Link>
      </div>
    </div>
  );
};

export default BPOPage;
