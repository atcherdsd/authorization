import React, { useRef } from 'react';
import { useForm } from 'react-hook-form';
import cl from './SignUpForm.module.scss';
import nationalities from '../../data/nationalities.json';
import okIcon from '../../assets/Shape.svg';
import { dates } from '../../data/dates';

const initialFormData = {
	firstName: '',
	lastName: '',
	nationality: '',
	email: '',
	birthDate: {
		day: '',
		month: '',
		year: '',
	},
	gender: '',
	password: '',
	confPassword: '',
};

const SignUpForm = () => {
	const [data, setData] = React.useState(initialFormData);

	const [isFullData, setIsFullData] = React.useState(false);

	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
		watch,
	} = useForm({ criteriaMode: 'all', mode: 'onChange' });

	const regexpName = /(^[a-zA-Z][a-zA-Z\s]{0,20}$)/;
	// eslint-disable-next-line no-useless-escape
	const regexpEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	const regexpPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

	const month = useRef({});
	month.current = watch('month', '');
	const year = useRef({});
	year.current = watch('year', '');
	const email = useRef({});
	email.current = watch('email', '');

	function getDaysCount() {
		let count;
		if (month.current === 'January') count = 31;
		else if (
			(month.current === 'February' && year.current % 4 == 0 && year.current % 100 != 0) ||
			(month.current === 'February' && year.current % 400 == 0)
		)
			count = 29;
		else if (
			(month.current === 'February' && year % 4 != 0 && year % 100 == 0) ||
			(month.current === 'February' && year % 400 != 0)
		)
			count = 28;
		else if (month.current === 'March') count = 31;
		else if (month.current === 'April') count = 30;
		else if (month.current === 'May') count = 31;
		else if (month.current === 'June') count = 30;
		else if (month.current === 'July') count = 31;
		else if (month.current === 'August') count = 31;
		else if (month.current === 'September') count = 30;
		else if (month.current === 'October') count = 31;
		else if (month.current === 'November') count = 30;
		else if (month.current === 'December') count = 31;
		else count = 31;
		return count;
	}

	const onSubmit = handleSubmit((data) => {
		setData(data);
		console.log(data);
		reset(initialFormData);
		setIsFullData(true);
		setData(initialFormData);
	});

	console.log(data);

	return isFullData === true ? (
		<div className={cl.content__container}>
			<h2 className={cl.title}>Thank You!</h2>
			<p className={cl.register__text}>you registered!</p>
		</div>
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
							className={
								errors.firstName ? `${cl.form__input} ${cl.input__error}` : `${cl.form__input}`
							}
							placeholder="Alice"
							autoComplete="off"
							defaultValue={''}
							{...register('firstName', {
								required: { value: true, message: 'Please enter First Name' },
								pattern: {
									value: regexpName,
									message: 'First Name is invalid. Use the Latin alphabet',
								},
								minLength: { value: 2, message: 'Field must contain 2 or more characters' },
							})}
						/>
						{errors.firstName?.types && (
							<div className={cl.error__wrapper}>
								{Object.entries(errors.firstName?.types).map(([type, message]) => (
									<p key={type} className={cl.error}>
										{message}
									</p>
								))}
							</div>
						)}
					</div>
					<div className={cl.form__group_item}>
						<label htmlFor="last-name" className={cl.form__label}>
							Last Name
						</label>
						<input
							type="text"
							id="last-name"
							className={
								errors.lastName ? `${cl.form__input} ${cl.input__error}` : `${cl.form__input}`
							}
							placeholder="Miller"
							autoComplete="off"
							defaultValue={''}
							{...register('lastName', {
								required: { value: true, message: 'Please enter Last Name' },
								pattern: {
									value: regexpName,
									message: 'Last Name is invalid. Use the latin alphabet',
								},
								minLength: { value: 2, message: 'Field must contain 2 or more characters' },
							})}
						/>
						{errors.lastName?.types && (
							<div className={cl.error__wrapper}>
								{Object.entries(errors.lastName?.types).map(([type, message]) => (
									<p key={type} className={cl.error}>
										{message}
									</p>
								))}
							</div>
						)}
					</div>
				</div>

				<div className={cl.form__group}>
					<div className={cl.form__group_item}>
						<label htmlFor="nationality" className={cl.form__label}>
							Nationality
						</label>
						<select
							id="nationality"
							className={
								errors.nationality
									? `${cl.form__select} ${cl.input__error_select}`
									: `${cl.form__select}`
							}
							defaultValue={''}
							{...register('nationality', {
								required: 'Please select a nationality',
							})}
						>
							{nationalities.map((elem) => {
								return (
									<option className={cl.nation__option} value={elem} key={elem}>
										{elem}
									</option>
								);
							})}
						</select>
						{errors.nationality && (
							<div className={cl.error__wrapper}>
								<p className={cl.error}>{errors.nationality.message}</p>
							</div>
						)}
					</div>
					<div className={cl.form__group_item}>
						<label htmlFor="email" className={cl.form__label}>
							E-mail
						</label>
						<input
							type="text"
							id="email"
							className={
								errors.email ? `${cl.form__input} ${cl.input__error}` : `${cl.form__input}`
							}
							placeholder="alice.miller@yahoo.com"
							autoComplete="off"
							defaultValue={''}
							{...register('email', {
								required: 'Please enter E-mail',
								pattern: {
									value: regexpEmail,
									message: 'The format of the email address must be: example@mail.ab',
								},
							})}
						/>
						{errors.email && (
							<div className={cl.error__wrapper}>
								<p className={cl.error}>{errors.email.message}</p>
							</div>
						)}
						{regexpEmail.test(email.current) && (
							<span className={cl.shape__container}>
								<img src={okIcon} alt="Ok" />
							</span>
						)}
					</div>
				</div>

				<div className={cl.form__group}>
					<div className={cl.form__group_item}>
						<label className={cl.form__label}>Date of Birth</label>
						<div className={cl.select__wrapper}>
							<div className={cl.select__container}>
								<select
									className={
										errors.day
											? `${cl.form__select_days} ${cl.input__error_select}`
											: `${cl.form__select_days}`
									}
									defaultValue={''}
									{...register('day', {
										required: 'Select a day',
										max: {
											value: getDaysCount(),
											message: 'Date is not correct',
										},
									})}
								>
									{dates.days.map((elem) => {
										return (
											<option className={cl.nation__option} value={elem} key={elem}>
												{elem}
											</option>
										);
									})}
								</select>
								{errors.day && (
									<div className={cl.error_date__wrapper}>
										<p className={cl.error}>{errors.day.message}</p>
									</div>
								)}
							</div>
							<div className={cl.select__container}>
								<select
									className={
										errors.month
											? `${cl.form__select_months} ${cl.input__error_select}`
											: `${cl.form__select_months}`
									}
									defaultValue={''}
									{...register('month', {
										required: 'Select a month',
									})}
								>
									{dates.months.map((elem) => {
										return (
											<option className={cl.nation__option} value={elem} key={elem}>
												{elem}
											</option>
										);
									})}
								</select>
								{errors.month && (
									<div className={cl.error_date__wrapper}>
										<p className={cl.error}>{errors.month.message}</p>
									</div>
								)}
							</div>
							<div className={cl.select__container}>
								<select
									className={
										errors.year
											? `${cl.form__select_years} ${cl.input__error_select}`
											: `${cl.form__select_years}`
									}
									defaultValue={''}
									{...register('year', {
										required: 'Select a year',
									})}
								>
									{dates.years.map((elem) => {
										return (
											<option className={cl.nation__option} value={elem} key={elem}>
												{elem}
											</option>
										);
									})}
								</select>
								{errors.year && (
									<div className={cl.error_date__wrapper}>
										<p className={cl.error}>{errors.year.message}</p>
									</div>
								)}
							</div>
						</div>
					</div>
					<div className={cl.form__group_item}>
						<div className={cl.form__label}>Gender</div>
						<div className={cl.radio__group}>
							<label htmlFor="male" className={cl.radio__label}>
								<input
									type="radio"
									name="gender"
									id="male"
									className={cl.form__input_radio}
									value="Male"
								/>
								<span className={cl.form__radio_value}>Male</span>
							</label>
							<label htmlFor="female" className={cl.radio__label}>
								<input
									type="radio"
									name="gender"
									id="female"
									className={cl.form__input_radio}
									defaultChecked
									value="Female"
								/>
								<span className={cl.form__radio_value}>Female</span>
							</label>
						</div>
					</div>
				</div>

				<div className={cl.form__group}>
					<div className={cl.form__group_item}>
						<label htmlFor="password" className={cl.form__label}>
							Password
						</label>
						<input
							type="password"
							id="password"
							className={
								errors.password ? `${cl.form__input} ${cl.input__error}` : `${cl.form__input}`
							}
							placeholder=" "
							defaultValue={''}
							{...register('password', {
								required: { value: true, message: 'Please enter a password' },
								pattern: {
									value: regexpPassword,
									message:
										'The password must contain uppercase and lowercase Latin letters and numbers',
								},
								minLength: { value: 8, message: 'Password must contain 8 or more characters' },
							})}
						/>
						{errors.password?.types && (
							<div className={cl.error__wrapper}>
								{Object.entries(errors.password?.types).map(([type, message]) => (
									<p key={type} className={cl.error}>
										{message}
									</p>
								))}
							</div>
						)}
					</div>
					<div className={cl.form__group_item}>
						<label htmlFor="conf-password" className={cl.form__label}>
							Confirm Password
						</label>
						<input
							type="password"
							id="conf-password"
							className={
								errors.confPassword ? `${cl.form__input} ${cl.input__error}` : `${cl.form__input}`
							}
							placeholder=" "
							defaultValue={''}
							{...register('confPassword', {
								required: { value: true, message: 'Please confirm a password' },
								validate: (val) => {
									if (watch('password') !== val && val.length > 0)
										return 'Your passwords do no match';
								},
							})}
						/>
						{errors.confPassword && (
							<div className={cl.error__wrapper}>
								<p className={cl.error}>{errors.confPassword.message}</p>
							</div>
						)}
					</div>
				</div>
			</div>

			<input type="submit" className={cl.form__button} value="Complete Signup"></input>
		</form>
	);
};

export default SignUpForm;
