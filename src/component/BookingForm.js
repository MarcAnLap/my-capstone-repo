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
          <h2>Confirmed reservation!</h2>
          <p>Date: {formData.date}</p>
          <p>Hour: {formData.time}</p>
          <p>Number of guests: {formData.guests}</p>
          <p>Occasion: {formData.occasion}</p>
          <button onClick={() => setShowAlert(false)}>Close</button>
        </div>
      )}

      <div className="booking-form-container">
        <div className="form-card">
          <form onSubmit={handleSubmit} className="booking-form">
            <label htmlFor="date">Choose date</label>
            <input
              type="date"
              id="date"
              value={formData.date}
              onChange={handleChange}
              required
            />

            <label htmlFor="time">Choose time</label>
            <select
              id="time"
              value={formData.time}
              onChange={handleChange}
              required
            >
              <option value="">Select a time</option>
              <option value="17:00">17:00</option>
              <option value="18:00">18:00</option>
              <option value="19:00">19:00</option>
              <option value="20:00">20:00</option>
              <option value="21:00">21:00</option>
            </select>

            <label htmlFor="guests"># Numbers of guests</label>
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
              <option value="">Select an occasion</option>
              <option value="Birthday">Wedding Party</option>
              <option value="Anniversary">Birthday</option>
              <option value="Anniversary">Staff Events</option>
              <option value="Anniversary">Other</option>
            </select>

            <button type="submit">Make the reservation!</button>
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
