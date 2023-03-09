import './index.css';

import React from 'react';

import ReactDOM, { createRoot } from 'react-dom/client';

import App from './App';

const rootElement = document.getElementById("root");
const renderRoot = createRoot(rootElement);

renderRoot.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
