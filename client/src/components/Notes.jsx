import React from "react";
import {useSelector} from "react-redux";
import {CircularProgress} from "@material-ui/core";
import Note from "./Note";

function Notes(){
    //aa
    const notes = useSelector((state)=>state.notes);
    return<div className="notes_div">
        {!notes.length ? <CircularProgress/> :notes.map((noteItem, index) => {
                return (
                 <Note
                        key={noteItem._id}
                        id={index}
                        note = {noteItem}
                    />         
                );
            })}
                  
    </div>
}
export default Notes;