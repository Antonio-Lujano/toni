module.exports = {
	globDirectory: '.',
	globPatterns: [
		'**/*.{png,js,jpg,html,json,css}'
	],
	swDest: 'sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};