import React from 'react';
import Header from './component/Header';
import Nav from './component/Nav';
import Main from './component/Main';
import Footer from './component/Footer';
import './App.css';


function App() {
  return (
    <div className='App'>
      <Nav />
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
