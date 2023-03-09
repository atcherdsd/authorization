import React from 'react';
import cl from './SignUpPage.module.scss';
import SignUpForm from '../SignUpForm/SignUpForm';

const question = 'Have an account? ';
const SignUpPage = () => {
	return (
		<React.Fragment>
			<div className={cl.container}>
				<div className={cl.wrapper}>
					<aside className={cl.aside}>
						<h1 className={cl.page_title}>Sign up</h1>
					</aside>
					<SignUpForm></SignUpForm>
					<p className={cl.login_notification}>
						{question}
						<a className={cl.login_link} href="#">
							Login
						</a>
					</p>
				</div>
			</div>
		</React.Fragment>
	);
};

export default SignUpPage;
