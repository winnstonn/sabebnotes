/** server/controllers/note.ctrl.js*/
const Note = require('./../models/Note')
const User = require('./../models/User')
const fs = require('fs')
const cloudinary = require('cloudinary')
module.exports = {
	addNote: (req, res, next) => {
		let { title, description } = req.body
		saveNote({ title, description})
		function saveNote(obj) {
			new Note(obj).save((err, note) => {
				if (err)
					res.send(err)
				else if (!note)
					res.send(400)
				else {
					return note.addAuthor(req.body.author_id).then((_article) => {
						return res.send(_article)
					})
				}
				next()
			})
		}
	},
	getAll: (req, res, next) => {
		Note.find(req.params.id)
		.populate('author')
		.populate('comments.author').exec((err, note)=> {
			if (err)
				res.send(err)
			else if (!note)
				res.send(404)
			else
				res.send(note)
			next()            
		})
	},
	/**
	 * article_id
	 */
	clapNote: (req, res, next) => {
		Note.findById(req.body.note_id).then((note)=> {
			return note.clap().then(()=>{
				return res.json({msg: "Done"})
			})
		}).catch(next)
	},
	/**
	 * comment, author_id, note_id
	 */
	commentNote: (req, res, next) => {
		Note.findById(req.body.note_id).then((note)=> {
			return note.comment({
				author: req.body.author_id,
				text: req.body.comment
			}).then(() => {
				return res.json({msg: "Done"})
			})
		}).catch(next)
	},
	/**
	 * note_id
	 */
	getNote: (req, res, next) => {
		Note.findById(req.params.id)
		.populate('author')
		.populate('comments.author').exec((err, note)=> {
			if (err)
				res.send(err)
			else if (!note)
				res.send(404)
			else
				res.send(note)
			next()            
		})
	}
}