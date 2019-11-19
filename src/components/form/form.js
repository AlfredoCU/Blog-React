import React, { Component } from 'react';
import logo from './logo512.png';
import './form.css';

export default class Blog extends Component {
    constructor() {
        super();
        this.state = {
            title: '',
            category: '',
            summary: '',
            description: '',
            tags: '',
            author: ''
        };
        // Input pertenece a este componente.
        this.entrada = this.entrada.bind(this);
        this.enviar = this.enviar.bind(this);
    }

    entrada(e) {
        const { value, name } = e.target; // para capturar el valor y el name.
        this.setState({
            [name]: value
        })
    }

    enviar(e) {
        e.preventDefault(); // Evita que se recargue la pag.
        this.props.onAddTodo(this.state);
    }

    render(){
        return(
            <div className="contenido">
                <div className="card">
                    <div>
                        <img src={ logo } className="image img" alt="Logo de react"/>
                    </div>
                    <div className="card-header">
                        <h2 className="title"> Crear un post </h2>
                    </div>
                    <form onSubmit={ this.enviar }>
                        <div className="form-group">
                            <input 
                            type="text"
                            name="title"
                            onChange={ this.entrada }
                            className="form-control"
                            placeholder="Titulo"
                            />
                        </div>
                        <div className="form-group">
                            <input 
                            type="text"
                            name="category"
                            onChange={ this.entrada }
                            className="form-control"
                            placeholder="Categoría"
                            />
                        </div>
                        <div className="form-group">
                            <input 
                            type="text"
                            name="summary"
                            onChange={ this.entrada }
                            className="form-control"
                            placeholder="Resumen"
                            />
                        </div>
                        <div className="form-group">
                            <input 
                            type="text"
                            name="description"
                            onChange={ this.entrada }
                            className="form-control"
                            placeholder="Descripción"
                            />
                        </div>
                        <div className="form-group">
                            <input 
                            type="text"
                            name="tags"
                            onChange={ this.entrada }
                            className="form-control"
                            placeholder="Etiquetas"
                            />
                        </div>
                        <div className="form-group">
                            <input 
                            type="text"
                            name="author"
                            onChange={ this.entrada }
                            className="form-control"
                            placeholder="Autor"
                            />
                        </div>
                        <div className="contbutton">
                            <button className="button">
                                Crear
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}