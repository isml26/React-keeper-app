import React, { useEffect } from "react";
import Head from "./Head.jsx";
import Footer from "./Footer.jsx";
import CreateArea from "./CreateArea.jsx";
import {useDispatch} from "react-redux";
import {getNotes} from "../actions/notes"
import Notes from "./Notes";

//we have to somehow fetch the data from that global redux store
import {useSelector} from "react-redux";
function App() {
    const notes = useSelector((state)=>state.notes);
    console.log(notes);
    const dispatch = useDispatch();//that is a hook we can use redux
    useEffect(()=>{
        dispatch(getNotes());
    },[dispatch])
  
    return <div>
        <Head />
        <CreateArea />
        <Notes/>       
        <Footer />
    </div>
};
export default App;


