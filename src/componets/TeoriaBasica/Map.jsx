import React from "react";

const map = () => {
  /*
    map:
      Permite recorrer un arreglo y devolver algo nuevo por cada elemento.
  */

  const frutas = [
    { nombre: "Manzana", precio: 120 },
    { nombre: "Banana", precio: 90 },
    { nombre: "Naranja", precio: 110 },
    { nombre: "Pera", precio: 130 },
    { nombre: "Uva", precio: 200 },
    { nombre: "Frutilla", precio: 250 },
    { nombre: "Kiwi", precio: 300 },
    { nombre: "Mango", precio: 280 },
    { nombre: "Ananá", precio: 220 },
    { nombre: "Sandía", precio: 180 },
    { nombre: "Melón", precio: 170 },
    { nombre: "Durazno", precio: 210 },
    { nombre: "Ciruela", precio: 190 },
    { nombre: "Cereza", precio: 350 },
    { nombre: "Arándano", precio: 400 },
    { nombre: "Limón", precio: 80 },
    { nombre: "Mandarina", precio: 100 },
    { nombre: "Pomelo", precio: 160 },
    { nombre: "Granada", precio: 320 },
    { nombre: "Papaya", precio: 360 },
  ];

  return (
    <div>
      {/*
        Trabajando con un map:
        1- Abrimos llaves
        2- Llamamos al arreglo.map
        3- Abrimos parentesis y escribimos:
            A- Una referencia de los elementos del arreglo
            b- Le pasamos un indicador del indice de los elementos
        4- Abrimos llaves
        5- Retornamos los elementos que vamos a mostrar
        6- Abrimos un div y alli mostramos la informacion
        7- cREAMOS UN DIV Y USAMOS EL INDICE DE LOS ELEENTOS
        8- Usamos una etiqueta y alli adentro llamamos a la referencia del arreglo.indice
      */}

      {frutas.map((fruta, index) => {
        return (
          <div key={index} className="bg-amber-500">
            <p className="text-amber-50">Fruta:  {fruta.nombre}</p>
            <p className="text-amber-50">Precio: {fruta.precio}</p>
          </div>
        );
      })}
    </div>
  );
};

export default map;