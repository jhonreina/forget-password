import React from 'react';
import './who.css';
import women from '../../assests/img/women.jpg'

const Who = () => {
    return (
        <div>
        <h3 className="titleone">Who's Moving?</h3>
        <img src={women} alt="imagen" className="women"/>

    </div>
    );
};

export default Who;