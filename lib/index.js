/*
** This file is required
** See CONTRIBUTING.md for more informations
*/

module.exports = function ({ conf }) {
	// Set options default
	const options = conf.mono.postgres = conf.mono.postgres || {}
	options.username = options.username || 'Vasiliy'

	// Expose foo property
	module.exports.hello = () => `Hello ${options.username}`
}
