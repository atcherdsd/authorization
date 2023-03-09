import React from 'react';
import cl from './App.module.scss';
import SignUpPage from '../SignUpPage/SignUpPage';

const App = () => {
	return (
		<React.Fragment>
			<div className={cl.container}>
				<SignUpPage></SignUpPage>
			</div>
		</React.Fragment>
	);
};

export default App;
