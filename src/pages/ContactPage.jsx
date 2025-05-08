import React, { useState } from "react";
import "../styles/Contact.css";
import InputField from "../components/InputField";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: false }); // Clear error for the field being edited
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate fields
    const newErrors = {};
    Object.keys(formData).forEach((key) => {
      if (!formData[key].trim()) {
        newErrors[key] = true;
      }
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setSuccessMessage(""); // Clear success message if there are errors
    } else {
      setErrors({});
      setSuccessMessage(
        `Thank you, ${formData.name} ${formData.surname}, for reaching out! We'll get back to you soon.`
      );
      setFormData({ name: "", surname: "", email: "", message: "" }); // Reset form
    }
  };

  return (
    <div className="contact-page">
      <div className="contact-intro">
        <h1>Contact Us</h1>
        <p>
          Have questions or need assistance? Reach out to us using the form
          below, or contact us directly via email or phone.
        </p>
      </div>

      <div className="contact-form-container">
        <form className="contact-form" onSubmit={handleSubmit}>
          <InputField
            label="Name"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            error={errors.name}
          />
          <InputField
            label="Surname"
            type="text"
            name="surname"
            value={formData.surname}
            onChange={handleChange}
            error={errors.surname}
          />
          <InputField
            label="Email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            error={errors.email}
          />
          <InputField
            label="Message"
            textarea={true}
            name="message"
            value={formData.message}
            onChange={handleChange}
            error={errors.message}
          />
          <button type="submit" className="submit-button">
            Submit
          </button>
        </form>
        {Object.keys(errors).length > 0 && (
          <p className="error-message">Please fill in the indicated fields.</p>
        )}
        {successMessage && <p className="success-message">{successMessage}</p>}
      </div>

      <div className="contact-info">
        <h2>Contact Information</h2>
        <p>Email: contact@consultpark.co.za</p>
        <p>Phone: +27 83 252 9090</p>
      </div>
    </div>
  );
};

export default ContactPage;