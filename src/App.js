import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'; // Renombrar a Router.
import './App.css';

// Components.
import Header from './components/header/header.js';
import Footer from './components/footer/footer.js';
import Home from './components/home/home.js';

export default class App extends Component {
  render(){
    return (
      <Router>
        <Header/>
        <div className="menu">
          <Link to="/" className="ops"> Home </Link>
          <Link to="/blog" className="ops"> Blog </Link>
          <Link to="/create-post" className="ops"> Crear un post </Link>
        </div>   
        <Route exact path="/" component={ Home }/>
        <Footer/>
      </Router>
    );
  }
}

/*
        <Route exact path="/" render={ ()=> { // exact
          return (
            <div>
              HOLA
            </div>
          );
        }}>
        </Route>

        <Route path="/hey" component={ Footer }/>

        <Route path="/footer" render={ ()=> {
          return (
            <div>
              Hola
            </div>
          );
        }}>
        </Route>

*/