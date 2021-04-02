//reducer is a function  that excepts the state and also accepts the action 
//based on the action type 
//state always needs to be something to equal
//and here state is notes
export default (notes=[],action)=>{
    switch (action.type) {
        case 'FETCH_ALL': 
            return action.payload;//action.payload our actual posts  
  
        case 'CREATE':
            return [...notes,action.payload];   
        
        case 'DELETE':
            return notes.filter((note)=>note._id !== action.payload);    
        default:
            return notes;
    }
}