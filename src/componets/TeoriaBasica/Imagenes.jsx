import bombonera from '../../assets/bombonera.jpg';

const ImagenesLocales = () => {
  // URL directa a una imagen (ejemplo válido)
  const imagenWeb =
    'https://upload.wikimedia.org/wikipedia/commons/1/1a/Flag_of_Argentina.svg';

  const textoAlternativoWeb = "Bandera de Argentina"

  return (
    <main className="max-w-3xl mx-auto p-6 space-y-10">
      <h1 className="text-3xl font-bold text-center">
        Imágenes en React.js
      </h1>

      {/* IMAGEN LOCAL */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">
          Imágenes locales importadas en React
        </h2>

        <img
          src={bombonera}
          alt="Estadio La Bombonera"
          className="rounded-lg shadow-md"
        />
      </section>

      {/* IMAGEN DESDE LA WEB */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">
          Imágenes desde la web en React
        </h2>

        {/*
          Para mostrar imágenes desde la web:
          1. Usamos una URL directa a la imagen
          2. La pasamos al atributo src
        */}

        <img
          src={imagenWeb}
          alt={textoAlternativoWeb}
          className="rounded-lg shadow-md"
        />
      </section>

      {/* Poner imagen como fondo con texto encima */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">
          Imágenes desde la web en React
        </h2>

        {/*
          Para poner una imagen de fondo hacemos esto:
          1: Creamos un div
          2. Creamos una etiqueta style
          3. Abrimos llaves u usamos esto backgroundImage: "url()"
          4. Pegamos el link o la ruta de la imagen

        */}
        <div
          className='flex h-64 bg-cover bg-center items-center rounded-2xl justify-center'

          style={{
            backgroundImage: "url('https://upload.wikimedia.org/wikipedia/commons/1/1a/Flag_of_Argentina.svg')"
          }}
        >
          <span
            className='bg-black-60 px-4 py-2 rounded-2xl text-blue-900'
          >
            Imagen de fondo
          </span>
        </div>

      </section>

      {/* IMAGEN LAZY */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">
          Imágen lazy en React
        </h2>

        {/*
          Para mostrar una imágen que no carga hacemos esto:
          1. Usamos el codigo que ya vimos
          2. Usamos la propiedad loading='lazy'
        */}

        <img
          src={imagenWeb}
          alt={textoAlternativoWeb}
          className="rounded-lg shadow-md"
          loading='lazy'
        /> {/* loading='lazy' Se carga solo cuando debe aparecer la imagen */}
      </section>
    </main>
  );
};

export default ImagenesLocales;
