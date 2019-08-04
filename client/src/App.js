import React from 'react';
import logo from './logo.svg';
import './App.css';

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-brands-svg-icons'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
library.add(fas, faPlus)

function App() {
	return (
		<div className="App">
			This is App.js
		</div>
	);
}

export default App;
