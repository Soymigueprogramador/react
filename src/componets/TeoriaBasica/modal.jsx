import "./Modal.css";

const Modal = () => {
  return (
    <>
      <div className="container">
        <h1>Chat en vivo</h1>

        <form>
          <input
            type="text"
            name="nombre"
            placeholder="Ingresa tu nombre"
            request
          />

          <textarea name="mensaje" placeholder="Ingresa tu mensaje" request />

          <input className="btn" type="submit" value="Enviar" />
        </form>
      </div>
    </>
  );
};

export default Modal;
