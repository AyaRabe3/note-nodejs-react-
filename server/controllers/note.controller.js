const _noteService = require('../services/note.service');

exports.create = async (req,res) => {
    console.log("from controller",req.body)
    const {title,description,isFavorite} = req.body;

    try{
        const newNote= await _noteService.create({title,description,isFavorite})
        res.send(newNote)
        // return res.send(newNote);
    }
    catch(error){
        return res.send(`error occurred during create a new note ${error}`);
    }

}