import React from 'react';
import '../styles/SuccessStories.css';

const SuccessStories = () => {
  const testimonials = [
    {
      quote: '“Consult Park transformed our business! The remote team they provided has been efficient, professional, and highly skilled.”',
      name: 'John Doe',
      title: 'CEO, TechCorp',
      avatar: 'https://i.pinimg.com/736x/71/d1/95/71d19542a612540d09d7a2abfdcb3c0b.jpg', // Placeholder image
    },
    {
      quote: '“Outsourcing our customer support to Consult Park was the best decision we made. Our response time improved, and customer satisfaction skyrocketed!”',
      name: 'Jane Smith',
      title: 'Head of Customer Success, RetailCo',
      avatar: 'https://i.pinimg.com/736x/ee/5e/dd/ee5edd6de20a7af2f30f2fa976d779c9.jpg', // Placeholder image
    },
    {
      quote: '“The team at Consult Park helped us scale our operations seamlessly. Their expertise and dedication are unmatched.”',
      name: 'Michael Brown',
      title: 'COO, FinTech Solutions',
      avatar: 'https://i.pinimg.com/736x/43/26/f0/4326f0c8f76e48a4a94f0294d43fe12d.jpg', // Placeholder image
    },
  ];

  return (
    <section className="success-stories-section">
      <div className="success-stories-header">
        <h2 className="success-stories-title">Success Stories</h2>
      </div>
      <div className="success-stories-cards">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-card">
            <div className="testimonial-quote">
              <span className="quote-icon">“</span>
              <p>{testimonial.quote}</p>
            </div>
            <div className="testimonial-profile">
              <img src={testimonial.avatar} alt={testimonial.name} className="profile-avatar" />
              <div className="profile-info">
                <p className="profile-name">{testimonial.name}</p>
                <p className="profile-title">{testimonial.title}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-12;">
        <a
          href="/contact"
          className="btn btn-success px-4 py-2 rounded-full text-white bg-lime-400 hover:bg-lime-500 transition"
        >
          📩 Join Our Growing List of Happy Clients! | Get Started
        </a>
      </div>
    </section>
  );
};

export default SuccessStories;
