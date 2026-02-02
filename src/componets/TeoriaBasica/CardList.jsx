import { Link } from "react-router-dom";

const CardList = () => {
  const listaTemas = [
    {
      titulo: "Hola Mundo",
      to: "/teoriabasica",
    },
    {
      titulo: "Exportaciones",
      to: "/teoriabasica",
    },
  ];

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-xl font-semibold">
        Esto es parte de la teoría básica
      </h1>

      {listaTemas.map((item, index) => (
        <Link
          to={item.to}
          key={index}
          className="
            w-full bg-[#151515] p-5 rounded-xl
            border border-[#333]
            flex justify-between items-center
            hover:border-[#e776f3]
            transition-colors
          "
        >
          <h2 className="font-medium text-lg">
            {item.titulo}
          </h2>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 24 24"
          >
            <path
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 12h14m-4 4l4-4m-4-4l4 4"
            />
          </svg>
        </Link>
      ))}
    </div>
  );
};

export default CardList;
