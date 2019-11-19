import React, { Component } from 'react';
import logo from './logo512.png';
import './home.css';

export default class Home extends Component {
    render() {
        return (
            <main className="content">
                <div className="tarjeta">
                    <div className="der">
                        <img src={logo} className="img" alt="Logo de react"/>
                    </div>
                    <div>
                        <h2 className="title"> ¡Bienvenid@ desconocid@! </h2>
                        <p className="text1"> Programar es el futuro y es nuestra gran motivación para 
                            crear espacios como estos, donde hablamos de diseño, programacion, 
                            tecnologías y mucho más.
                        </p>
                        <p className="text2"> "Combinar el arte del diseño con el arte de la programación" </p>
                    </div>
                </div>
            </main>
        );
    }
}