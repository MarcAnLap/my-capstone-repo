import React, { useState } from 'react';
import formImage from '../img/restaurant_chef_B.jpg';
import '../BookingForm.css'; // Ensure this file contains the styles

function BookingForm() {
  const [formData, setFormData] = useState({
    date: '',
    time: '',
    guests: '',
    occasion: ''
  });

  const [showAlert, setShowAlert] = useState(false);

  // Handle form field changes
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setShowAlert(true);
  };

  return (
    <div className="booking-form-wrapper">
      {showAlert && (
        <div className="alert">
          <h2>Réservation Confirmée!</h2>
          <p>Date: {formData.date}</p>
          <p>Heure: {formData.time}</p>
          <p>Nombre d'invités: {formData.guests}</p>
          <p>Occasion: {formData.occasion}</p>
          <button onClick={() => setShowAlert(false)}>Fermer</button>
        </div>
      )}

      <div className="booking-form-container">
        <div className="form-card">
          <form onSubmit={handleSubmit} className="booking-form">
            <label htmlFor="date">Choisir la date</label>
            <input
              type="date"
              id="date"
              value={formData.date}
              onChange={handleChange}
              required
            />

            <label htmlFor="time">Choisir l'heure</label>
            <select
              id="time"
              value={formData.time}
              onChange={handleChange}
              required
            >
              <option value="">Sélectionnez une heure</option>
              <option value="17:00">17:00</option>
              <option value="18:00">18:00</option>
              <option value="19:00">19:00</option>
              <option value="20:00">20:00</option>
              <option value="21:00">21:00</option>
            </select>

            <label htmlFor="guests">Nombre d'invités</label>
            <input
              type="number"
              id="guests"
              placeholder="1"
              min="1"
              max="10"
              value={formData.guests}
              onChange={handleChange}
              required
            />

            <label htmlFor="occasion">Occasion</label>
            <select
              id="occasion"
              value={formData.occasion}
              onChange={handleChange}
              required
            >
              <option value="">Sélectionnez une occasion</option>
              <option value="Birthday">Anniversaire</option>
              <option value="Anniversary">Anniversaire de mariage</option>
            </select>

            <button type="submit">Faire la réservation</button>
          </form>
        </div>

        <div className="form-image">
          <img src={formImage} alt="Delicious food" />
        </div>
      </div>
    </div>
  );
}

export default BookingForm;
