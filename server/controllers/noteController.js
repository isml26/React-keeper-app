import mongoose from "mongoose";
import NoteMessage from "../models/noteMessage.js"

export const getNotes = async (req,res)=>{
    try {
        //finding something inside of the model takes time  
        //which meeans that is an asynchronous action
        const note = await NoteMessage.find();
        //return json which is going to be an array of all messages that we have 
        res.status(200).json(note);
    } catch (error) {
        res.status(404).json({message:error.message}); 
    }
}
export const createNote = async(req,res)=>{
    const note = req.body;
    const newNote = new NoteMessage(note);
    try {
        await newNote.save();
        res.status(201).json(newNote);
    } catch (error) {
        res.status(409).json({message:error.message});
    }
}

export const deleteNote = async (req,res)=>{
    const {id} = req.params;
    
    if(!mongoose.Types.ObjectId.isValid(id))return res.status(404).send('Not note with that id');
        
    await NoteMessage.findByIdAndRemove(id);
    console.log("DELETE!");
    
    res.json({message:'Note Deleted Successfully!!'});
}