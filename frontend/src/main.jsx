// import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';

// if (process.env.NODE_ENV === 'development') {
//     const { worker } = require('./mocks/browser.js');
//     worker.start();
// }

createRoot(document.getElementById('root')).render(<App />);
