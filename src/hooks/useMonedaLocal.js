import React, {Fragment, useState} from 'react';

const useMonedaLocal = (stateInicial, opciones) => {
    //*State del custom hook
    const [state, actualizarState] = useState(stateInicial);

    const Seleccionar = () => (
        <Fragment>
            <select
                onChange={e=> actualizarState(e.target.value)}
                value = {state}
                className="form-control" 
            >   
                <option>Selecione una opción---</option>
                {opciones.map(opcion=>(
                    <option key={opcion.codigo} value={opcion.codigo}>{opcion.moneda}</option>
                ))}
            </select>
        </Fragment>
    )
    //*Retor toda la interfaz creada desde la función
    return [state, Seleccionar, actualizarState];
}
 
export default useMonedaLocal;