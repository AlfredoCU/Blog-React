import React, { Component } from 'react';
import logo from './logo.svg';
import './header.css';

export default class Header extends Component {
    render() {
        return (
            <header className="header">
                <div className="app-header">
                    <img src={logo} className="app-logo" alt="Logo de React"/>
                    <h1 className="app-title"> Bienvenido a Enchulame el Blog </h1>
                </div>
            </header>
        );
    }
}