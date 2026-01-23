// Importacion de estilos
import "./App.css"

// Importacion de componentes
import HolaMundo     from './componets/TeoriaBasica/HolaMundo.jsx';
import Exportaciones from './componets/Exportaciones/Exportaciones.jsx';
import UseState from './componets/Hooks/UseState.jsx';

const App = () => {
  return (
    <>
      <HolaMundo />
      <hr/>
      <hr/>
      <hr/>
      <Exportaciones />
      <hr/>
      <hr/>
      <hr/>
      <UseState />
    </>
  )
}

export default App