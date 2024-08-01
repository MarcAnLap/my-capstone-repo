import React from 'react';
import Header from '../component/Header';
import Nav from '../component/Nav';
import Main from '../component/Main';
import Footer from '../component/Footer';
import '../App.css';


function Homepage() {
  return (
    <div className='Home'>
      <Nav />
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default Homepage;
