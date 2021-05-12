const express = require('express');
const router = express.Router();
const Multer = require('multer');
const bodyParser = require('body-parser')
// const imgUpload = require('../modules/imgUpload');

const app = express()
app.listen(19002, () => {
  console.log('Listening on port 19002')
})

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

// Handles the multipart/form-data & adds a .file key to the request object
const multer = Multer({
  storage: Multer.MemoryStorage,
  fileSize: 5 * 1024 * 1024
});