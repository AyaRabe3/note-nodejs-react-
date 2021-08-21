const mongoose=require("mongoose");
const NoteModel=new mongoose.Schema({
    title: {
        type: String,
        required: [true, "title  is required."]
    },
    description: {
        type: String,
        required: [true, "description  is required."],
        min: [3, "minimum description length is 3"],
        max: [1000, "maximum description length is 1000"]
    },
    isFavorite: {
        type: Boolean
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("note", NoteModel);

