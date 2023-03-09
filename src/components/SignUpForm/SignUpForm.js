import React from 'react';
// import { useForm } from 'react-hook-form';
import cl from './SignUpForm.module.scss';
import nationalities from '../../data/nationalities.json';
import okIcon from '../../assets/Shape.svg';

function SignUpForm() {
	const [isFullData] = React.useState(false);

	const onSubmit = () => {};
	return isFullData ? (
		<div>Got it!</div>
	) : (
		<form className={cl.form} onSubmit={onSubmit}>
			<h2 className={cl.form__title}>New user?</h2>
			<h3 className={cl.form__subtitle}>Use the form below to create your account.</h3>

			<div className={cl.form__group_container}>
				<div className={cl.form__group}>
					<div className={cl.form__group_item}>
						<label htmlFor="first-name" className={cl.form__label}>
							First Name
						</label>
						<input
							type="text"
							id="first-name"
							className={cl.form__input}
							placeholder=""
							autoComplete="off"
							defaultValue={'Alice'}
						></input>
					</div>
					<div className={cl.form__group_item}>
						<label htmlFor="last-name" className={cl.form__label}>
							Last Name
						</label>
						<input
							type="text"
							id="last-name"
							className={cl.form__input}
							placeholder=" "
							autoComplete="off"
							defaultValue={'Miller'}
						></input>
					</div>
				</div>

				<div className={cl.form__group}>
					<div className={cl.form__group_item}>
						<label htmlFor="nationality" className={cl.form__label}>
							Nationality
						</label>
						<select id="nationality" className={cl.form__select} defaultValue={'American'}>
							{nationalities.map((elem) => {
								return (
									<option className={cl.nation__option} value={elem} key={elem}>
										{elem}
									</option>
								);
							})}
						</select>
					</div>
					<div className={cl.form__group_item}>
						<label htmlFor="email" className={cl.form__label}>
							E-mail
						</label>
						<input
							type="text"
							id="email"
							className={cl.form__input}
							placeholder=" "
							autoComplete="off"
							defaultValue={''}
						></input>
						<span className={cl.shape__container}>
							<img src={okIcon} alt="Ok" />
						</span>
					</div>
				</div>

				<div className={cl.form__group}>
					<div className={cl.form__group_item}>
						<label htmlFor="birth" className={cl.form__label}>
							Date of Birth
						</label>
						<input
							type="date"
							id="birth"
							className={cl.form__input}
							placeholder=" "
							autoComplete="off"
							defaultValue={''}
						></input>
					</div>
					<div className={cl.form__group_item}>
						<label className={cl.form__label}>Gender</label>
						<div className={cl.radio__group}>
							<input type="radio" name="gender" className={cl.form__input_radio} value="Male" />

							<span className={cl.form__radio_value}>Male</span>

							<input
								type="radio"
								name="gender"
								className={cl.form__input_radio}
								defaultChecked
								value="Female"
							/>

							<span className={cl.form__radio_value}>Female</span>
						</div>
					</div>
				</div>

				<div className={cl.form__group}>
					<div className={cl.form__group_item}>
						<label htmlFor="password" className={cl.form__label}>
							Password
						</label>
						<input type="password" id="password" className={cl.form__input} placeholder=" "></input>
					</div>
					<div className={cl.form__group_item}>
						<label htmlFor="conf-password" className={cl.form__label}>
							Confirm Password
						</label>
						<input
							type="password"
							id="conf-password"
							className={cl.form__input}
							placeholder=" "
						></input>
					</div>
				</div>
			</div>

			<div>
				<input type="submit" className={cl.form__button} value="Complete Signup"></input>
			</div>
		</form>
	);
}

export default SignUpForm;
