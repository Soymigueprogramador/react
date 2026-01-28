// Importando un componente de export default
import ExportDefault from './ExportDefault.jsx'

// Importando un componente de export const
import { ExportConst } from './ExportConst.jsx';

const Exportaciones = () => {
  // Diferencias entre export default y export const:
  /*
    Export default:
    El export default lo usamos para exportar una funcion que se utiliza para una sola cosa.
    Export default para exportar un componente completo

    Export const:
    El export const o export funcion se usa para exportar una funcion que cumple una accion
    espesifica la cual podemos llamar varias veces.
    export const o export function lo usamos para exportar un objeto como simulando una base de datos.
  */

    return (
    <div>
        <ExportDefault />
        <ExportConst />
    </div>
  )
}

export default Exportaciones