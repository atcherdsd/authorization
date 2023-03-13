export default {
	'/handler/': function ({ get }) {
		console.log(get);
		return 'form data received';
	},
};
