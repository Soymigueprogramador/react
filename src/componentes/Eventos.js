import React from 'react'

const Eventos = () => {
  // Funcion de evento para mas click. 
  const masClick = (e, nombre) => {
    alert(`${nombre} hiciste click en mas click`);
    console.log(`${nombre} hiciste click en mas click`);
    console.log(e)
  };
  
  function dobleClick(e, nombre) {
    alert(`${nombre} hiciste doble click en mas click`);
    console.log(`${nombre} hiciste doble     click en mas click`);
  };

    return (
    <div>
      <h1> Eventos </h1>

      {/* Asi es como creamos un evento de click */}
      {/* En este caso la funcion es anonima pero yo podria ponerle cualquier nombre */}
      <button onClick={() => {
        console.log('Este pasa cuando hago click')
      }}> Evento click </button>

      {/* Asi es como creamos un evento con una funcion definida. */}
      <button onClick={e => masClick(e, "Miguel") }> Mas click </button>

      {/* Asi creamos un evento de doble click. */}
      <button onDoubleClick={ e => dobleClick(e, "Miguel") }> Doble click </button>
    </div>
  )
}

export default Eventos
