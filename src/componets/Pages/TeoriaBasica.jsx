// Importación de componentes
import HolaMundo from "../TeoriaBasica/HolaMundo.jsx";
import Exportaciones from "../TeoriaBasica/Exportaciones.jsx";
import UseState from "../Hooks/UseState.jsx";
import CrearModal from "../TeoriaBasica/CrearModal.jsx";
import MapComponent from "../TeoriaBasica/Map.jsx";
import MapObjetos from "../TeoriaBasica/MapObjetos.jsx";

const TeoriaBasica = () => {
  return (
    <>
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
    </>
  );
};

export default TeoriaBasica;