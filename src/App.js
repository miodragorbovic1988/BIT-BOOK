import React, { Component, Fragment } from 'react';
import './App.css';
// import Modal from "react-responsive-modal";
import 'materialize-css/dist/css/materialize.min.css';
// import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link } from "react-router-dom";

//COMPONENTS
import { Header } from './view/Header';
import { Footer } from './view/Footer';
import { Main } from './view/Main';
import { SinglePagePost } from './view/components/SinglePagePost';

class App extends Component {
  render() {
    return (
        <div>
      <Fragment>
        <Header />
        <Main />
      <BrowserRouter>
        <Route path="/singlepagepost" exact component={SinglePagePost} />
      </BrowserRouter>
        <Footer />
      </Fragment>
        </div>
    )
  }
}

export default App;
