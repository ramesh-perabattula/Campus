const express=require('express');
const app=express();
const cors = require('cors');
const mongoose=require("mongoose")

app.use(cors());

mongoose.connect("mongodb://localhost:27017/Campus");


const userRoutes=require("./routes/userRoutes");
const postRoutes=require("./routes/postRoutes");
const commentRoutes=require("./routes/commentRoutes");


app.use(express.json());


app.use("/api/v1",userRoutes);
app.use("/api/v1",postRoutes);
app.use("/api/v1",commentRoutes);



app.listen(3000,()=>{
    console.log("server running on 3000");
})