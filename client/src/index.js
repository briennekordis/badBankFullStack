import React from 'react';
import { render } from 'react-dom';
import { HashRouter } from 'react-router-dom';
import './index.css';
import App from './Components/App';

render((
  <HashRouter>
    <App />
    </HashRouter>
), document.getElementById('root'));

