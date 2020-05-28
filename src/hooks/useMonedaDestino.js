import React, {Fragment, useState} from 'react';

const useMonedaDestino = (stateInicial, opciones) => {
    //*State del hook 
    const [state, actualizarState] = useState(stateInicial);

    //*Cuando se coloca los parentesis se asimila el return
    const Seleccionar = () => (
        <Fragment>
            <select
                onChange={ e=> actualizarState(e.target.value) }
                value = {state}
                className="form-control"
            >
                <option>--Seleccione una opción</option>
                {opciones.map(opcion=>(  
                    <option key={opcion.codigo} value={opcion.codigo}>{opcion.moneda}</option>
                ))}
            </select>
        </Fragment>
    )
    
    return [state, Seleccionar, actualizarState];
}
 
export default useMonedaDestino;