import React, { Component } from "react"; //rcc
import logo from "./logo.svg";
import "./App.css";

export class App extends Component {
  // funcion especial para inicializar nuestro objeto
  constructor(){
    super()
    this.state = {
      contador:0 ,
      limiteInferior:0,
      limiteSuperior:0
    }
    this.aumentarContador = this.aumentarContador.bind(this)
    this.disminuirContador = this.disminuirContador.bind(this)
    this.resetContador = this.resetContador.bind(this)
  
  }

  aumentarContador(){
    if(this.state.contador < this.state.limiteSuperior){
    console.log('Aumenta')
    this.setState({contador : this.state.contador + 1 })
    }
  }

  disminuirContador(){
    if(this.state.contador > this.state.limiteInferior){
    console.log('Disminuye')
    this.setState({contador : this.state.contador - 1 })
    }

  }

  resetContador(){
    console.log('Reset')
    this.setState({contador : 0 })
  }

  establecerLimiteInf(nuevoLimiteI){
    this.setState({limiteInferior:nuevoLimiteI})
  }

  establecerLimiteSup(nuevoLimiteS){
    this.setState({limiteSuperior:nuevoLimiteS})
  }

  render() {

    // let valor = 5
    return (
      <div className="App App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>APLICACION DE CONTADOR</p>
          
      <label>Limite Inferior <input onChange={(e) => this.establecerLimiteInf(e.target.value) }  placeholder="Ingresa el limite Inferior" /></label>
      <label>Limite Superior <input onChange={(e) => this.establecerLimiteSup(e.target.value) }  placeholder="Ingresa el limite Superior" /></label>            
      <br></br>
        <button onClick={ this.aumentarContador }>UP</button>
        <p>
           {this.state.contador}
        </p>
        <button onClick={ this.disminuirContador }>BACK</button>
      <br></br>
        <button onClick={ this.resetContador }>RESET</button>
      <p>{JSON.stringify(this.state)}</p>
      </div>
    );
  }
}
