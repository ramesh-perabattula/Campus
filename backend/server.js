const express=require('express');
const app=express();
const mongoose=require("mongoose")

mongoose.connect("mongodb://localhost:27017/Campus");


const userRoutes=require("./routes/userRoutes");
const postRoutes=require("./routes/postRoutes");


app.use(express.json());


app.use("/api/v1",userRoutes);
app.use("/api/v1",postRoutes);



app.listen(3000,()=>{
    console.log("server running on 3000");
})