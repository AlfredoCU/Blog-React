import React from 'react';
import './App.css';

/*
function HelloWord(props) {
  return (
    <div>
      <h1 id="Hello"> 
        Hola Mundo {props.name} 
      </h1>
      <h2>
        {props.subtitle}
      </h2>
    </div>
  );
}
*/

class HelloWord extends React.Component {
  state = {
    show: true
  }

  cambiarEstado = () => {
    this.setState({ show: !this.state.show});
  }

  render(){
    if(this.state.show) {
      return(
        <div>
          <h1 id="Hello">
            Hola Mundo {this.props.name}
          </h1>
          <h2>
            {this.props.subtitle}
          </h2>
          <button onClick={this.cambiarEstado}> Cambiar estado </button>
        </div>
      );
    }
    else {
      return(
        <div>
        <h1> No hay elementos </h1>
        <button onClick={this.cambiarEstado}> Cambiar estado </button>
        </div>
      );
    }
  }
}

/* Componentes con funciones Arrow.
const App = () => (
    <div> 
      <HelloWord/> <HelloWord/>
    </div>
);
*/

// Componentes con funciones normales.
function App() {
  return (
    <div className="App">
      <HelloWord name="Alfredo" subtitle="Componente 1"/> 
      <HelloWord name="Angelica" subtitle="Componente 2"/>
    </div>
  );
}

/* Componentes con clases.
class App extends React.Component {
  render(){
    return (
      <div>
        <HelloWord/> <HelloWord/>
      </div>
    );
  }
}
*/

export default App;