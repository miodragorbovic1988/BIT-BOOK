import React, { Component, Fragment } from 'react';
import './App.css';
// import Modal from "react-responsive-modal";
import 'materialize-css/dist/css/materialize.min.css';
// import ReactDOM from 'react-dom';
import { Route, Link } from "react-router-dom";

//COMPONENTS
import { Header } from './view/Header';
import { Footer } from './view/Footer';
import { Main } from './view/Main';

class App extends Component {
  render() {
    return (
      <div>
        <Fragment>
          <Header />
          <Main />
          <Footer />
        </Fragment>
      </div>
    )
  }
}

export default App;
