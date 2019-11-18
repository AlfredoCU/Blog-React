import React, { Component } from 'react';
import logo from './github-logo.svg';
import './footer.css';

export default class Footer extends Component {
    render() {
        return (
            <footer className="footer">
                <a href="https://github.com/AlfredoCU">
                    <img src={logo} className="app-logo" alt="Logo de GitHub"/> 
                </a>
                <p> AlfredoCU </p>
                <p className="copy">&copy; Enchulame el Blog 2019 - Todos los derechos reservados </p>
            </footer>
        );
    }
}