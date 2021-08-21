const express=require("express");
const app=express();
const port =4402;
require('./config/db');
require("express-async-errors");
var cors = require("cors");
app.use(cors());
app.use(express.json())


const noteRoutes=require('./routes/note.routes');

app.use('/api/note',noteRoutes)



app.listen(port, _ =>
  console.log(`app listening at http://localhost:${port}`)
);