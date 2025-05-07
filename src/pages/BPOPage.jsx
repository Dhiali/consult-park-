import React from 'react';
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
    description: 'Expert IT support for troubleshooting, system maintenance, and software assistance.'
  },
];

const businessOptimization = [
  {
    title: 'HR & Payroll Management',
    description: 'End-to-end HR functions, from onboarding to payroll and benefits administration.',
  },
  {
    title: 'Workflow Automation & Efficiency Audits',
    description: 'Analyze and automate repetitive processes to boost performance and reduce human error.',
  },
];

const BPOPage = () => {
  return (
    <div className="bpo-page">
      <h1>Business Process Outsourcing</h1>

      <section className="bpo-section">
        <h2>🚀 BPO Solutions</h2>
        <div className="bpo-grid">
          {bpoSolutions.map((service, idx) => (
            <ServiceCard key={idx} title={service.title} description={service.description} />
          ))}
        </div>
      </section>

      <section className="bpo-section">
        <h2>🧠 Business Optimization</h2>
        <div className="bpo-grid">
          {businessOptimization.map((service, idx) => (
            <ServiceCard key={idx} title={service.title} description={service.description} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default BPOPage;
