import { useState } from "react";
import Modal from "./modal.jsx";

const CrearModal = () => {
  // Creamos un modal
  const [modal, setModal] = useState(false);

  return (
    <div>
      <h1>Creando un modal</h1>
      <button onClick={() => setModal(!modal)}>
        {" "}
        {modal ? "Cerrar el chat" : "Abrir el chat"}{" "}
      </button>
      {/**
        * Operador ternario
        *
        * ? Representa el caso verdadero (true)
        * : Representa el caso falso (false)
       */}

      {modal && <Modal />}
    </div>
  );
};

export default CrearModal;
