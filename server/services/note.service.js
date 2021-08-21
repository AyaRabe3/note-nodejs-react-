const NoteModel=require('../models/note.model');


exports.create=async noteData => {
    // console.log("from service",noteData)
    try
    {
       const newNote= await new NoteModel(noteData);
       await newNote.save();
       return newMovie;    
    }
    catch(error)
    {
      return error
    }
}