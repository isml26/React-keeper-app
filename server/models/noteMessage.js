import mongoose from "mongoose";

const noteSchema = mongoose.Schema({
    title:String,
    content:String
});

const NoteMessage = mongoose.model("NoteMessage",noteSchema);

export default NoteMessage;