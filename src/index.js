import React from 'react';
import ReactDOM from 'react-dom/client';
import Counter from './Components/Counter/Counter';
import Login from './Components/Login/Login';
import Comments from './Components/Comments/Comments'
import Country from './Components/Country/Country'
import './normalize.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<Counter/>
		<Login/>
		<Comments/>
		<Country/>
	</React.StrictMode>
);