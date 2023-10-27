import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import ContactContextProvider from './contexts/ContactContextProvider';
import CounterContextProvider from './contexts/CounterContextProvider';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <ContactContextProvider>
      <CounterContextProvider>
        <App />
      </CounterContextProvider>
    </ContactContextProvider>
  </BrowserRouter>
);
