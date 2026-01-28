import CardProduct from './CardProduct'

const MapObjetos = () => {
  // Map de objetos
  const usuarios = {
    user1: {
      id: 1,
      nombre: "Juan Pérez",
      email: "juan.perez@email.com",
      edad: 28,
    },
    user2: {
      id: 2,
      nombre: "María Gómez",
      email: "maria.gomez@email.com",
      edad: 32,
    },
    user3: {
      id: 3,
      nombre: "Carlos López",
      email: "carlos.lopez@email.com",
      edad: 25,
    },
    user4: {
      id: 4,
      nombre: "Ana Martínez",
      email: "ana.martinez@email.com",
      edad: 30,
    },
    user5: {
      id: 5,
      nombre: "Luis Fernández",
      email: "luis.fernandez@email.com",
      edad: 35,
    },
    user6: {
      id: 6,
      nombre: "Sofía Ramírez",
      email: "sofia.ramirez@email.com",
      edad: 27,
    },
    user7: {
      id: 7,
      nombre: "Diego Torres",
      email: "diego.torres@email.com",
      edad: 29,
    },
    user8: {
      id: 8,
      nombre: "Valentina Ruiz",
      email: "valentina.ruiz@email.com",
      edad: 26,
    },
    user9: {
      id: 9,
      nombre: "Martín Silva",
      email: "martin.silva@email.com",
      edad: 34,
    },
    user10: {
      id: 10,
      nombre: "Lucía Castro",
      email: "lucia.castro@email.com",
      edad: 31,
    },
    user11: {
      id: 11,
      nombre: "Pablo Medina",
      email: "pablo.medina@email.com",
      edad: 24,
    },
    user12: {
      id: 12,
      nombre: "Camila Rojas",
      email: "camila.rojas@email.com",
      edad: 28,
    },
    user13: {
      id: 13,
      nombre: "Nicolás Herrera",
      email: "nicolas.herrera@email.com",
      edad: 36,
    },
    user14: {
      id: 14,
      nombre: "Florencia Núñez",
      email: "florencia.nunez@email.com",
      edad: 27,
    },
    user15: {
      id: 15,
      nombre: "Sebastián Acosta",
      email: "sebastian.acosta@email.com",
      edad: 33,
    },
    user16: {
      id: 16,
      nombre: "Agustina Molina",
      email: "agustina.molina@email.com",
      edad: 29,
    },
    user17: {
      id: 17,
      nombre: "Federico Vega",
      email: "federico.vega@email.com",
      edad: 38,
    },
    user18: {
      id: 18,
      nombre: "Paula Ibáñez",
      email: "paula.ibanez@email.com",
      edad: 26,
    },
    user19: {
      id: 19,
      nombre: "Matías Romero",
      email: "matias.romero@email.com",
      edad: 35,
    },
    user20: {
      id: 20,
      nombre: "Julieta Alonso",
      email: "julieta.alonso@email.com",
      edad: 23,
    },
  };

  return (
    <div className='flex flex-col gap-6'>
        {/*
            Los objetos no tienen un map asi que tuve que convertirlos.
        */}
        {
           Object.values(usuarios).map((item, index) => (
                <CardProduct
                    key={index}
                    item={item}
                />
            ))
        }
    </div>
  );
};

export default MapObjetos;
