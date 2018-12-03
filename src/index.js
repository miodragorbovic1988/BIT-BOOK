import React from 'react';
import ReactDOM from 'react-dom';
// import Modal from "react-responsive-modal";
import App from './App';
import "materialize-css/dist/css/materialize.min.css";
import { HashRouter } from "../node_modules/react-router-dom";

ReactDOM.render(<HashRouter> <App /> </ HashRouter>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA

