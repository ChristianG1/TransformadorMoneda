import React, {Fragment, useState, useEffect} from 'react';
import axios from 'axios';
import useMonedaLocal from '../hooks/useMonedaLocal';
import useMonedaDestino from '../hooks/useMonedaDestino';


const Formulario = ({guardarCantidades, guardarMonedaLocal, guardarMonedaDestino}) => {

    //*State de guardar la cantidad 
    const [cantidad, guardarCantidad] = useState();

    //*State para el error 
    const [error, cambiarEstadoError] = useState(false);

    //*Array de moneda
    const P_MONEDA = [
        {codigo: 'MXN', moneda: 'Peso mexicano'},
        {codigo: 'EUR', moneda: 'Euro'}, 
        {codigo: 'USD', moneda: 'Dolar americano'},
        {codigo: 'CNY', moneda: 'Moneda China'},
        {codigo: 'CAD', moneda: 'Dolar canadiense'},
        {codigo: 'CHF', moneda: 'Moneda suiza'},
        {codigo: 'GBP', moneda: 'Libra esterlina'},
        {codigo: 'SEK', moneda: 'Corona sueca'}
    ]
    //*State de la moneda local
    const [monedaLocal, SelectMonedaLocal] = useMonedaLocal('', P_MONEDA);

    //*State de la moneda destino 
    const [monedaDestino, SelectMonedaDestino] = useMonedaDestino('', P_MONEDA)


    //*Mandar a llamar la API 
    useEffect(()=>{
        const consultarAPI = async() =>{
            const url = `https://api.exchangeratesapi.io/latest`
            const resultado = await axios.get(url); 
            console.log(resultado);
        }
        consultarAPI();
    },[])

    //*Acciones del botón de submit 
    const cambiarMoneda = e =>{ 
        e.preventDefault(); //Evitar la recarga de la página 
        console.log('hola')
        console.log(cantidad);

        //Validar 
        if((cantidad<1 || isNaN(cantidad)) || monedaLocal.trim()==='' || monedaDestino.trim()===''){
            cambiarEstadoError(true); //Poner el estado de error a verdadero
            return;
        }
        //Pasar los datos al componente principal
        cambiarEstadoError(false); //Regresar el estado de error a falso
        guardarCantidades(cantidad); 
        guardarMonedaLocal(monedaLocal); 
        guardarMonedaDestino(monedaDestino);
    }
  
    return ( 
        <Fragment>
        <h1 className="text-center mt-3 text-primary">Cambia tu moneda bien easy</h1>
        <form
            onSubmit={cambiarMoneda}   
        >
            <div className="row">
                {error ? <p className="alert alert-danger btn-lg btn-block mt-4 text-center">Por favor, llena todos los datos.</p>: null}      
            </div>
            <div className="row mt-4">
                <div className="col s-12">
                    <label>Cantidad a cambiar</label>
                    <input 
                        type="number" 
                        className="form-control" 
                        placeholder="Dinero"
                        onChange={e => guardarCantidad(parseFloat(e.target.value))}
                    />
                </div>

                <div className="col s-12">
                    <label>Pais de origen del dinero</label>
                    <SelectMonedaLocal />
                </div>
                
                <div className="col s-12">
                    <label>Pais del cambio</label>
                    <SelectMonedaDestino />
                </div>
                
            </div>

            <div className="row">
                <div className="col center-block text-center">
                    <button type="submit" className="btn btn-outline-primary btn-lg btn-block mt-4 text-uppercase">Transformación</button>
                </div>
            </div>
        </form>

        
        </Fragment>
            
       
     );
}
 
export default Formulario;