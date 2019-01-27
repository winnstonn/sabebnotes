// server/routes/note.js
const notecontroller = require('./../controllers/note.ctrl')
const multipart = require('connect-multiparty')
const multipartWare = multipart()

module.exports = (router) => {
    /**
     * get all notes
     */
    router
        .route('/notes')
        .get(notecontroller.getAll)
    /**
     * add a note
     */
    router
        .route('/note')
        .post(multipartWare, notecontroller.addNote)
    /**
     * clap on an article
     */
    router
        .route('/note/clap')
        .post(notecontroller.clapNote)
    /**
     * comment on an article
     */
    router
        .route('/note/comment')
        .post(notecontroller.commentNote)
    /**
     * get a particlular article to view
     */
    router
        .route('/note/:id')
        .get(Notecontroller.getNote)
}