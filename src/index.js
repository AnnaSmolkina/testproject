import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import AppContainer from './app/app.container';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppContainer />
  </React.StrictMode>
);

