// Importación de componentes
import HolaMundo from "../TeoriaBasica/HolaMundo.jsx";
import Exportaciones from "../TeoriaBasica/Exportaciones.jsx";
import UseState from "../Hooks/UseState.jsx";
import CrearModal from "../TeoriaBasica/CrearModal.jsx";
import MapComponent from "../TeoriaBasica/Map.jsx";
import MapObjetos from "../TeoriaBasica/MapObjetos.jsx";
import UseEffect from "./../Hooks/UseEffect.jsx";
import Button from '../UI/Button.jsx';
import Imagenes from '../TeoriaBasica/Imagenes.jsx';

import { useNavigate } from "react-router-dom";

const TeoriaBasica = () => {
  const navego = useNavigate()

  return (
    <>
      <Button
  text="Volver atras"
  onClick={navego}
 />

      <HolaMundo />
      <hr />

      <Exportaciones />
      <hr />

      <UseState />
      <hr />

      <CrearModal />
      <hr />

      <MapComponent />
      <hr />

      <MapObjetos />
      <hr />
      <UseEffect/>
      <hr />
      <Imagenes/>
      <hr />
    </>
  );
};

export default TeoriaBasica;