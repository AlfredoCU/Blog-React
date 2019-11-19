import React, { Component } from 'react';
import './App.css';
import { info } from './sample/info.json';

// Components.

import Form from './components/form/form.js';

export default class ListPost extends Component {
  constructor(){
    super();
    this.state = {
      info,
      show: true
    }
    this.agregar = this.agregar.bind(this);
  }

  cambiarEstado = (index) => {
    this.setState({ show: !this.state.show });
  }

  agregar(data){
    this.setState({
      info: [...this.state.info, data]
    });
  }
  
  eliminar(index) {
      this.setState({
          info: this.state.info.filter((e, i) => { // Se crea un nuevo arreglo.
              return i !== index; // No se agraga si el index es igual.
          })
      });
  }

  render() {
    const data1 = this.state.info.map((info, index) => { // map recorre todo el arreglo.
      return (
        <div className="card" key={index}>
          <div className="card-header">
            <h3> { info.title } </h3>
          </div>
          <div>
            <p> { info.summary } </p>
          </div>
          <div className="card-footer">
            <em> { info.category } </em>
            <em> { info.tags } </em>
            <em> { info.author}</em>
          </div>
          <div>
          <div className="btn">
            <button className="button bot" onClick={ this.cambiarEstado }>
              Ver
            </button>
            <button className="button bot btn-re " onClick={ this.eliminar.bind(this, index) }>
              Eliminar
            </button>
          </div>
          </div>
        </div>
      );
    });

    const data2 = this.state.info.map((info, index) => {
      return (
        <div className="card" key={index}>
          <div className="card-header">
            <h3> { info.title } </h3>
          </div>
          <div>
            <p> { info.summary } </p>
            <p> { info.description } </p>
          </div>
          <div className="card-footer">
            <em> { info.category } </em>
            <em> { info.tags } </em>
            <em> { info.author}</em>
          </div>
          <div>
          <div className="btn">
            <button className="button bot" onClick={ this.cambiarEstado }>
              Ver
            </button>
            <button className="button bot btn-re " onClick={ this.eliminar.bind(this, index) }>
              Eliminar
            </button>
          </div>
          </div>
        </div>
      );
    });
    if(this.state.show) {
      return (
        <div className="total">  
          <h2>
            Nuestros Post 
          </h2>
          <em> 
            Total de post: { this.state.info.length }
          </em>
          { data1 }
          <Form onAddTodo={ this.agregar }/>
        </div>
      );
    }
    else {
      return (
        <div className="total">  
          <h2>
            Nuestros Post 
          </h2>
          <em> 
            Total de post: { this.state.info.length }
          </em>
          { data2 }
          <Form onAddTodo={ this.agregar }/>
        </div>
      );
    }
  }
}