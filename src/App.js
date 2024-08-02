import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Homepage from './component/Homepage';
import BookingPage from './component/BookingPage'; // Ensure you have this component

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/booking" element={<BookingPage />} />
    </Routes>
  );
}

export default App;
