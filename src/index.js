import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/App';
import { BrowserRouter } from 'react-router-dom';
import './reset.scss';
import { AlertProvider } from './components/contexts/AlertContext';
import AlertPopup from './components/AlertPopup/AlertPopup';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<AlertProvider>
			<BrowserRouter basename={process.env.PUBLIC_URL}>
				<App />
				<AlertPopup />
			</BrowserRouter>
		</AlertProvider>
	</React.StrictMode>
);
