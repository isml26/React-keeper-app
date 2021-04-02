import React from "react";
import Fab from '@material-ui/core/Fab';
import Zoom from "@material-ui/core/Zoom";
import AddIcon from '@material-ui/icons/Add';
import {useDispatch} from "react-redux";
import {createNote} from "../actions/notes"
function CreateArea() {
    const dispatch = useDispatch();
    const [note,setNote] = React.useState({
        title:"",
        content:""
    });
    function handleChange(event){
    const {name,value} = event.target;
    setNote(note=>{
        return {
            ...note,
        [name]:value
        }
    })};
    function add(event){    
       setNote({
        title: "",
        content: ""
      });
    event.preventDefault(); 
    if(note.title !== '' || note.content !== '')
    dispatch(createNote(note));        
    }
    const [expanded,setExpanded] = React.useState(false)
    function expand(){
       setExpanded(true);
    }
    return <div>
        <form className= "create-note" method="post">
            <input
                onClick={expand}
                onChange = {handleChange}
                name="title"
                placeholder="Title"
                autoComplete="off"
                value={note.title}
            />
            <textarea
                hidden={!expanded}
                onChange = {handleChange}
                name="content"
                placeholder="Take a note..."
                autoComplete="off"
                value={note.content}
            />
        <Zoom in={expanded}>
            <Fab onClick={add}>
            <AddIcon/>
            </Fab>
            </Zoom>    
        </form>
    </div>
}

export default CreateArea;
