import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/App';
import './reset.scss';
import { AlertProvider } from './components/contexts/AlertContext';
import AlertPopup from './components/AlertPopup/AlertPopup';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<AlertProvider>
			<App />
			<AlertPopup />
		</AlertProvider>
	</React.StrictMode>
);
