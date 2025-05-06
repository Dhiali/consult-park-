// src/components/FeatureCard.jsx
import React from 'react';
import styles from '../styles/FeatureCard.module.css'; // Optional if using CSS Modules

const FeatureCard = ({ title }) => {
  return (
    <div className={styles.card}>
      <h4>{title}</h4>
    </div>
  );
};

export default FeatureCard;
