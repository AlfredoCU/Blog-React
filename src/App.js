import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'; // Renombrar a Router.
import './App.css';
import { info } from './sample/info.json';

// Components.
import Header from './components/header/header.js';
import Footer from './components/footer/footer.js';
import Home from './components/home/home.js';
import Form from './components/form/form.js';

class ListPost extends Component {
  constructor(){
    super();
    this.state = {
      info
    }
  }

  render() {
    const data = this.state.info.map((info, index) => {
      return (
        <div className="card" key={index}>
          <div className="card-header">
            <h3> { info.title } </h3>
          </div>
          <div>
            <p> { info.category } </p>
            <p> { info.summary } </p>
          </div>
          <div className="card-footer">
            <em> { info.tags } </em>
            <em> { info.author}</em>
          </div>
        </div>
      );
    });
    
    return(
      <div className="total">  
        <h2>
          Nuestros Post 
        </h2>
        <em> 
          Total de post: { this.state.info.length }
        </em>
        { data }
      </div>
    );
  }
}

export default class App extends Component {
  render(){
    return (
      <Router>
        <Header/>
        <nav className="menu">
          <Link to="/" className="ops"> Home </Link>
          <Link to="/blog" className="ops"> Blog </Link>
          <Link to="/create-post" className="ops"> Crear un post </Link>
        </nav>  
        <Route exact path="/" component={ Home }/>
        <Route exact path="/blog" render={ ()=> {
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