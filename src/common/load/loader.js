const Loader = () => {
	return new Promise(resolve => {
		require.ensure([], () => {
			// require('../../../theme/dist/components/loader.min.css');
			resolve()
		});
	});
};

module.exports = Loader;