import CardList from '../TeoriaBasica/CardList.jsx'

const home = () => {
  return (
    <main>
      <div className="flex min-h-screen flex-col items-center justify-center p-4 bg-black text-white">
        <h1 className="text-center font-bold text-3xl mb-8">
          Pagina de inicio
        </h1>

        <div className="mx-auto w-full max-w-3xl">
          <h2 className="text-center font-bold text-1xl mb-8">
            Lista de temas de React.js 19
          </h2>

            <CardList/>
        </div>
      </div>
    </main>
  );
};

export default home;
