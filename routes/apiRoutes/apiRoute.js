const router = require("express").Router();
const path = require('path');
const fs = require('fs')

router.get('/api/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../../db/db.json'));
  });

router.post('/api/notes', (req, res) => {
let note = fs.readFileSync('db/db.json');
note = JSON.parse(note);
res.json(note);

let appNote = {
    title: req.body.title,
    text: req.body.text,
};

note.push(appNote);
fs.writeFileSync('db/db.json', JSON.stringify(note));
});





module.exports = router;