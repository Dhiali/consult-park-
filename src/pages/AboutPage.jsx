import React from 'react';
import '../styles/AboutUs.css';
import { FaLightbulb, FaHandshake, FaRocket, FaGlobe } from 'react-icons/fa';

const AboutUs = () => {
  return (
    <section className="about-us">
     <div className="container">
       <h1>About Consult Park</h1>
       <p className="intro">
          At Consult Park, we’re not just matching resumes to roles, we’re bridging global opportunity gaps. As a next-gen human capital solutions provider, our mission is to empower service-based businesses with skilled, reliable, and remote-ready talent that can scale with their ambitions.
       </p>
       <p>
          Our goal is simple yet ambitious, to become the gold standard in remote staffing and business process optimization. We aim to connect high-impact businesses with top-tier talent that delivers measurable outcomes. By removing barriers like location, overhead, and rigid contracts, we help organizations scale smarter, move faster, and operate leaner.
       </p>

       <div className="mission-vision">
         <h2>Our Mission</h2>
         <p>
            Our mission is to deliver world-class outsourcing solutions by bridging businesses with certified, performance-driven remote professionals. We’re committed to elevating global teams through strategic placements, continuous support, and a culture of excellence. Every client relationship is built on trust, results, and the shared goal of sustainable growth.
         </p>

         <h2>Our Vision</h2>
         <p>
            We envision a world where borders don't limit talent, where every company can access the skills they need, and every professional has the opportunity to thrive. Our vision is to lead this global shift by building a future-ready workforce that powers innovation, drives performance, and creates long-term impact for both businesses and communities.
         </p>
       </div>

       <div className="values-section">
         <h2>Our Core Values</h2>
         <div className="values-grid">
           <div className="value-tile">
             <FaLightbulb size={40} />
             <h3>Excellence</h3>
             <p>We deliver nothing less than high-quality talent and exceptional service.</p>
           </div>
           <div className="value-tile">
             <FaHandshake size={40} />
             <h3>Integrity</h3>
             <p>We build trust through transparency, professionalism, and ethical practices.</p>
           </div>
           <div className="value-tile">
             <FaRocket size={40} />
            <h3>Innovation</h3>
             <p>We continuously evolve and improve how we serve and support our clients.</p>
            </div>
            <div className="value-tile">
             <FaGlobe size={40} />
             <h3>Global Reach</h3>
             <p>We tap into a diverse, international talent pool for remote excellence.</p>
           </div>
         </div>
       </div>
     </div>
   </section>
 );
};

export default AboutUs;
