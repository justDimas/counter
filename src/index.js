import React from 'react';
import ReactDOM from 'react-dom/client';
import Counter from './Components/Counter';
import './normalize.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
	<Counter/>
  </React.StrictMode>
);