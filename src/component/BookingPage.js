import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../img/logo.png';
import arrow from '../img/arrow_left.png';
import BookingForm from './BookingForm';
import '../BookingPage.css'; // Ensure this file contains the CSS

function BookingPage() {
  useEffect(() => {
    const handleScroll = () => {
      const arrowContainer = document.querySelector('.booking-header .arrow-container');
      if (window.scrollY > 50) { // Adjust the scroll threshold as needed
        arrowContainer.classList.add('scrolled');
      } else {
        arrowContainer.classList.remove('scrolled');
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="booking-page">
      <header className="booking-header">
        <Link to="/" className="arrow-container">
          <img src={arrow} alt="Left-arrow" className="arrow" />
        </Link>
        <img src={logo} alt="Logo" />
        <h1>Reserve Your Table</h1>
        <p>We look forward to serving you! Please fill out the form below to book your table.</p>
      </header>
      <BookingForm />
    </div>
  );
}

export default BookingPage;
