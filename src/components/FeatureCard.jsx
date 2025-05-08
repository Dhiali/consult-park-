import React from 'react';
import styles from '../styles/FeatureCard.module.css';

const FeatureCard = ({ title }) => {
  return (
    <div className={styles.card}>
      <h4>{title}</h4>
    </div>
  );
};

export default FeatureCard;
