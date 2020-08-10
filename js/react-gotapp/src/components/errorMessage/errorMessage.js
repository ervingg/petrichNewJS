import React from 'react';
import './errorMessage.css';
import img from './error.jpg';

const ErrorMessage = () => {
  return (
    <div className="error-wrapper">
      {/* <img src={process.env.PUBLIC_URL + '/img/error.jpg'} alt="error"/> */}
      <img src={img} alt="error"/>
      <span className="error-text">Something goes wrong</span>
    </div>
  )
}

export default ErrorMessage;