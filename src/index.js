import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import LayoutPrimary from './compoents/common/LayoutPrimary';
import { BrowserRouter as Router } from 'react-router-dom';
// styles
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/index.scss';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <LayoutPrimary>
        <App />
      </LayoutPrimary>
    </Router>
  </React.StrictMode>
);
