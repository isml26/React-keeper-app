import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import postRoutes from "./routes/noteRoute.js"
const app = express();
app.use(express.json({limit:"30mb",extended:true})); 
app.use(express.urlencoded({limit:"30mb",extended:true}));  
app.use(cors());
dotenv.config();
app.get("/",(req,res)=>{
    res.send("Hello to Keeper App");
});
//to parse request comnig from client(frontend)
app.use("/notes",postRoutes);
const CONNECTION_URL='mongodb+srv://admin123:'+process.env.PW+'@cluster0.02slt.mongodb.net/notesDB?retryWrites=true&w=majority';
const PORT = process.env.PORT||5000;
mongoose.connect(CONNECTION_URL,{useNewUrlParser:true,useUnifiedTopology:true})
.then(()=>app.listen(PORT,()=>console.log(`Server is running on port: ${PORT}`))) 
.catch((error)=>console.log(error.message));
mongoose.set("useFindAndModify",false);

