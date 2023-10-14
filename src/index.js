import React from 'react';
import ReactDOM from 'react-dom/client';
import Counter from './Components/Counter/Counter';
import Login from './Components/Login/Login';
import './normalize.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<Counter/>
		<Login/>
	</React.StrictMode>
);