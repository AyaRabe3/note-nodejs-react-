const router = require("express").Router();
const noteController = require("../controllers/note.controller");


router.post("/create", noteController.create);


module.exports = router;