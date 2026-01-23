// Importando el hook de useState
import { useState } from "react";

const UseState = () => {
  // ¿Que son los hooks
  /*
        Los hooks son funciones especiales que ya vienen integradas en react y que te
        permiten tener acceso a funcionalidades espesificas
    */

  // ¿Para que se usa useState?
  /*
            Se usa para controlar el estado de un componente.
            El estado del componente es la memoria en la cual se guarda la nformacion
            que el usuario le ingresa y aparte permite reaccionar ante los cambios.
        */

  // Ejemplo en codigo
  const [contador, setContador] = useState(0);
  // Estructura del estado:
  /**
   * estado = Es el estado actual que se va a renderizar
   * setStado = Es una funcion que va actualizar el estado
   * useState() = Es el valor inicial con el que empiesa el estado renderizado
   */

  // Funcion para controlar al contador
  const suma = () => {
    setContador(prev => prev + 1);
  };

  const resta = () => {
    // Validando que no se pase del 0 al restar
    setContador(prev => (prev > 0 ? prev - 1 : prev));
  };

  return (
    <div>
      <h1>Creando un contador</h1>

      <button onClick={suma}>+</button>
      <strong> {contador} </strong>
      <button onClick={resta} disabled={contador === 0}>
        -
      </button>
    </div>
  );
};

export default UseState;