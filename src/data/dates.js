function* generateItems(start, end) {
	for (let i = start; i <= end; i++) yield i;
}

export const dates = {
	days: [''].concat(Array.from(generateItems(1, 31))),
	months: [
		'',
		'January',
		'February',
		'March',
		'April',
		'May',
		'June',
		'July',
		'August',
		'September',
		'October',
		'November',
		'December',
	],
	years: [''].concat(Array.from(generateItems(1920, 2022))),
};
