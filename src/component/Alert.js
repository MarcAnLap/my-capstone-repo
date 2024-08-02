import React from 'react';
import './BookingForm.css'; // Assurez-vous que ce chemin est correct

function Alert({ message, onClose }) {
  return (
    <div className="alert">
      <p>{message}</p>
      <button onClick={onClose}>Close</button>
    </div>
  );
}

export default Alert;
