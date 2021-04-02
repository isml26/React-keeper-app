import React from "react";
import DeleteIcon from '@material-ui/icons/Delete';
import {useDispatch} from "react-redux";
import {deleteNote} from "../actions/notes"
function Note({note}){
    const dispatch = useDispatch();
    // function deleteClick(){
    // note.onDelete(note.id);
    // }
    return <div className="note">
    <h1>{note.title}</h1>
    <p>{note.content}</p>
    <button onClick={()=>dispatch(deleteNote(note._id))}><DeleteIcon/></button>
    </div>

}
export default Note;