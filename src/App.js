import React, { useState, useEffect } from 'react';
import Formulario from './components/Formulario'
import { Fragment } from 'react';
import axios from 'axios';
import Resultado from './components/Resultado';

function App() {
  //*State donde voy a recibir los valores del fomulario 
  const [cantidad, guardarCantidades] = useState(); 
  const [monedaLocal, guardarMonedaLocal] = useState(); 
  const [monedaDestino, guardarMonedaDestino] = useState();
  const [resultado, guardarResultado] = useState();


  useEffect(()=>{
    const consultarAPI = async() =>{
        const url = `https://api.exchangeratesapi.io/latest?base=${monedaLocal}&symbols=${monedaDestino}`
        const resultado = await axios.get(url); 
        guardarResultado((cantidad * resultado.data.rates[monedaDestino]).toFixed(3)); 
      
      }
    consultarAPI();
},[monedaLocal, monedaDestino, cantidad])


  return (
    <Fragment>
        <nav className="navbar navbar-light bg-dark">
          <a className="navbar-brand text-white" href="#">Convertidor de moneda</a>
        </nav>

        <div className="container">
          <Formulario
            guardarCantidades={guardarCantidades}
            guardarMonedaLocal = {guardarMonedaLocal}
            guardarMonedaDestino = {guardarMonedaDestino}
          />
          {resultado ? 
            <Resultado 
            resultado = {resultado}
            monedaLocal = {monedaLocal}
            monedaDestino = {monedaDestino}
          />:null}
          

        </div>
          
    </Fragment>
  )
}

export default App;
