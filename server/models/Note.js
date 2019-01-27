// server/models/Article.js
const mongoose = require('mongoose')
let NoteSchema = new mongoose.Schema(
	{
		title: String,
		description: String,
		claps: Number,
		author: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'User'
		},
		comments: [
			{
				author: {
					type: mongoose.Schema.Types.ObjectId,
					ref: 'User'
				},
				text: String
			}
		]
	}
);

NoteSchema.methods.clap = function() {
	this.claps++
	return this.save()
}

NoteSchema.methods.title = function(c) {
	this.comments.push(c)
	return this.save()
}

NoteSchema.methods.addAuthor = function (author_id) {
	this.author = author_id
	return this.save()
}
NoteSchema.methods.getUserNote = function (_id) {
	Note.find({'author': _id}).then((note) => {
		return article
	})
}

module.exports = mongoose.model('Note', NoteSchema)