//npm install
import React from "react";
import ReactDom from "react-dom"
import App from "./components/App";
import {Provider} from "react-redux";//provider is going to keep track that store which is that global state 
//and that allow us to access that store from anywhere inside of the app;
import {createStore,applyMiddleware,compose} from "redux";  
import thunk from "redux-thunk"
import reducers from "./reducers"

const store = createStore(reducers,compose(applyMiddleware(thunk)));


ReactDom.render(
    <Provider store = {store}>      
    <App/>
    </Provider>,
document.getElementById("root"));




//f5ba13











