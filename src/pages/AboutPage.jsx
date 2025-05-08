import React from 'react';
import '../styles/AboutUs.css';
import { FaLightbulb, FaHandshake, FaRocket, FaGlobe } from 'react-icons/fa';

const AboutUs = () => {
  return (
    <section className="about-us">
     <div className="container">
       <h1>Who We Are</h1>
       <p className="intro">
        Consult Park is more than just an outsourcing company—we’re your growth partner. Our
        mission is to bridge businesses with skilled professionals, helping them scale faster, work
        smarter, and achieve more.
        With a network of highly trained professionals, cutting-edge tools, and a client-first approach,
        we deliver solutions that enhance productivity, efficiency, and profitability.
       </p>

       <div className="mission-vision">
         <h2>Our Mission & Vision</h2>
         <p>
         Our mission is simple: <b>Empower businesses with seamless outsourcing solutions that
        drive success.</b>
        We envision a world where businesses of all sizes can access high-quality, cost-effective talent
        without the constraints of location or infrastructure. <br/>
        <b>Mission:</b> Empower businesses globally by connecting them with skilled virtual teams, driving
        efficiency, collaboration, and growth, while creating impactful career opportunities for
        professionals. <br/>
        <b>Vision:</b> To become the premier outsourcing partner, transforming global workforce solutions and
        fostering sustainable growth and innovation for businesses and communities worldwide.
         </p>
       </div>

       <div className="values-section">
         <h2>Our Core Values</h2>
         <div className="values-grid">
           <div className="value-tile">
             <FaLightbulb size={40} />
             <h3>Excellence</h3>
             <p>We uphold the highest standards in everything we do.
             <br/>
             <br/>
             Committed to delivering high-quality outsourcing solutions and ensuring client satisfaction.
             </p>
           </div>
           <div className="value-tile">
             <FaHandshake size={40} />
             <h3>Integrity</h3>
             <p>Transparency and trust are at the core of our partnerships.
              <br/>
              <br/>
              Operating with transparency, honesty, and ethical standards in every interaction.
             </p>
           </div>
           <div className="value-tile">
             <FaRocket size={40} />
            <h3>Innovation</h3>
             <p>We embrace technology and smart solutions to improve efficiency.
             <br/>
             <br/>
             Embracing forward-thinking strategies to provide creative and effective solutions.
             </p>
            </div>
            <div className="value-tile">
             <FaGlobe size={40} />
             <h3>Global Reach</h3>
             <p>We connect businesses with top-tier professionals worldwide.
             <br/>
             <br/>
             Contributing to economic development through career opportunities and international collaboration.
             </p>
           </div>
         </div>
       </div>
     </div>
   </section>
 );
};

export default AboutUs;
