import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'; // Renombrar a Router.
import './App.css';

// Components.
import Header from './components/header/header.js';
import Footer from './components/footer/footer.js';
import Home from './components/home/home.js';
import ListPost from './listpost.js'

export default class App extends Component {
  render(){
    return (
      <Router>
        <Header/>
        <nav className="menu">
          <Link to="/" className="ops"> Home </Link>
          <Link to="/blog" className="ops"> Blog </Link>
        </nav>  
        <Route exact path="/" component={ Home }/>
        <Route path="/blog" render={ ()=> {
          return (
            <div className="contenido">
              <ListPost/>
            </div>
          );
        }}>
        </Route>
        <Footer/>
      </Router>
    );
  }
}