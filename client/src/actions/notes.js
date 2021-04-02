import * as api from "../api";

//Action creators 
export const getNotes = ()=>async (dispatch)=>{
//here we are successfully using redux we pass or dispatch an action from the data from our backend
    try {
        const {data} = await api.fetchNotes(); //here data represent the notes
        //payload is usually the data where we store all of our posts
        const action = {type:"FETCH_ALL",payload:data};
        dispatch(action);//redux-thunk dispatch the action rather than return;
        //fetch all the posts some time is gonna have to pass 
        //for that we have to use redux thunk,it allows us ()=> we can specify additional arrow function
    } catch (error) {
        console.log(error);
    }
}
export const createNote = (post)=> async(dispatch)=>{
    try {
        const {data} = await api.createNote(post);
        dispatch({type:'CREATE',payload:data});
    } catch (error) {  
        console.log(error);
    }
}
export const deleteNote = (id) => async (dispatch)=>{
    try {
        await api.deleteNote(id);
        dispatch({type:'DELETE',payload:id});
    } catch (error) {
        console.log(error);
    }
}



