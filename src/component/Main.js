import React from 'react';
import '../Main.css';

function Main() {
  return (
    <main className="main-content">
      <section className="specials-section">
        <h2>This Week's Specials!</h2>
        <div className="main-grid">
          <div className="card">
            <img src="path-to-image1.jpg" alt="Greek Salad" />
            <h3>Greek Salad</h3>
            <p>The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.</p>
            <p>$12.99</p>
          </div>
          <div className="card">
            <img src="path-to-image2.jpg" alt="Bruschetta" />
            <h3>Bruschetta</h3>
            <p>Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.</p>
            <p>$5.99</p>
          </div>
          <div className="card">
            <img src="path-to-image3.jpg" alt="Lemon Dessert" />
            <h3>Lemon Dessert</h3>
            <p>This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.</p>
            <p>$5.00</p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Main;
