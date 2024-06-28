import React from 'react';
import { ToastContainer } from 'react-toastify';
import { Toaster } from 'react-hot-toast';
import ReactDOM from 'react-dom/client';
import App from './App';

import 'react-toastify/dist/ReactToastify.css';
import "bootstrap/dist/css/bootstrap.min.css";
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ToastContainer/>
    <Toaster/>
    <App />
  </React.StrictMode>
);
