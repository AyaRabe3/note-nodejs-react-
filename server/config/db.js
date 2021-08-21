const mongoose=require("mongoose");
const DB_URI="mongodb://localhost:27017/notes";
mongoose.connect(DB_URI)
.then( _ => {
    console.info(`connected to db successfully`)
})
.catch((err) => {
    console.log("error to conncet db");
    console.error(err);
    process.exit(1); // to close process if can't access to db
})