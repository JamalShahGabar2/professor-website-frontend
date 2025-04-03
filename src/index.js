import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { SpeedInsights } from '@vercel/speed-insights/react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <SpeedInsights /> {/* ✅ TRACKS performance */}
  </React.StrictMode>
);

// ✅ If you want to start measuring performance, pass a function (e.g. console.log)
// Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
