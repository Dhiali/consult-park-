import '../styles/ValueTile.css';

import React from 'react';

const ValueTile = ({ icon, label}) => (
    <div className="value-title">
        <div className="icon">{icon}</div>
        <p>{label}</p>
        </div>
);

export default ValueTile;