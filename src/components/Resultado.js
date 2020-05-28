import React, {Fragment} from 'react';

const Resultado = ({resultado, monedaLocal, monedaDestino}) => {
    return ( 
        <Fragment>
            <div className="row mt-4">
               
                <div className="col s-12 text-center">
                     {resultado > 500 ? <h1>Ufff, eres toda una <span className="text-primary">Kardashian</span></h1> : <h1 className="mt-4">Chale, que <span className="text-primary">pobre</span> eres :( </h1> }
                    <h3>El resultado es: <span className="text-primary">${resultado}</span></h3>
                    <h2>Moneda local: <span className="text-primary">{monedaLocal}</span></h2>
                    <h3>Moneda destino: <span className="text-primary">{monedaDestino}</span></h3>
                </div>

                 
                <div className="col s-12 mb-4 text-center">
                        {resultado > 500 ? 
                            <iframe src="https://giphy.com/embed/3o6gDWzmAzrpi5DQU8" width="350" height="300" className="imagenes" frameBorder="0"  allowFullScreen></iframe>
                        : <iframe src="https://giphy.com/embed/3o6UB5RrlQuMfZp82Y" width="400" height="356" className="imagenes" frameBorder="0"  allowFullScreen></iframe>}
                </div>
                
            </div>
        </Fragment>
        
    )
}
 
export default Resultado;