// server/routes/index.js
const note = require('./noteRoute')
module.exports = (router) => {
	note(router)
}