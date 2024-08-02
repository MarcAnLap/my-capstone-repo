import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css'; // Ensure this file exists and is correctly imported
import reportWebVitals from './reportWebVitals'; // Optional for performance measuring

// Create the root element
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the app with BrowserRouter for routing
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// Optional: Report web vitals for performance measuring
reportWebVitals();
