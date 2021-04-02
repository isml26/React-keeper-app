import axios from "axios";
//this is the url pointing to the backend route
const url = "https://keeper-app1.herokuapp.com/notes";

export const fetchNotes = ()=>axios.get(url);

export const createNote = (newNote)=>axios.post(url,newNote);

export const deleteNote = (id)=>axios.delete(`${url}/${id}`);

