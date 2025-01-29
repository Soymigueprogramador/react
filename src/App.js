import logo from './logo.svg';
import './App.css';
import MiComponente from './componentes/MiComponente.js';
import SegundoComponente from './componentes/SegundoComponente.js'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <div className='segundo-componente'>
          <SegundoComponente/>
          <hr></hr>
          <MiComponente/>
        </div>
        
      </header>
    </div>
  );
}

export default App;

// Aclaraciones:
/*
  1- Las importaciones e imbocaciones de archivos es igual a la de react con vite.
  2- Para escribir un comentario en react tenemos que usar este las llaves {} y adentro de estas usamos los caracteres de comentarios en bloque de js.
*/