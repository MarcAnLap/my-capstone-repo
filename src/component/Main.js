import React from 'react';
import MainImage1 from '../img/greek salad.jpg';
import MainImage2 from '../img/bruchetta_1.png';
import MainImage3 from '../img/lemon dessert.jpg';
import '../Main.css';

function Main() {
  return (
    <main className="main-content">
      <section className="specials-section">
        <h2>This Week's Specials!</h2>
        <div className="main-grid">
          <div className="card">
            <img src={MainImage1} alt="Greek Salad" />
            <h3>Greek Salad</h3>
            <p>The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.</p>
            <span className='price'>$12.99</span>
          </div>
          <div className="card">
            <img src={MainImage2} alt="Bruschetta" />
            <h3>Bruschetta</h3>
            <p>Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.</p>
            <span className='price'>$5.99</span>
          </div>
          <div className="card">
            <img src={MainImage3} alt="Lemon Dessert" />
            <h3>Lemon Dessert</h3>
            <p>This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.</p>
            <span className='price'>$5.00</span> 
          </div>
        </div>
      </section>
    </main>
  );
}

export default Main;
