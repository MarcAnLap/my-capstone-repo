import React from 'react';
import headerImage from '../img/restauranfood.jpg'; // Update with the actual path to your image
import '../Header.css';

function Header() {
  return (
    <header className="App-header">
      <div className="header-content">
        <h1>Little Lemon</h1>
        <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
        <button>Reserve a Table</button>
      </div>
      <div className="header-img">
        <img src={headerImage} alt="Delicious food" />
      </div>
    </header>
  );
}

export default Header;
