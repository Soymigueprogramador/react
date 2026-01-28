import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Pages/Home.jsx";
import Registro from "../Pages/Registro.jsx";
import TeoriaBasica from '../Pages/TeoriaBasica.jsx'
import Error404 from '../Pages/Error404.jsx'

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Registro" element={<Registro />} />
        <Route path="/teoriabasica" element={<TeoriaBasica />} />

        <Route path="*" element={<Error404 />} /> {/* Para las rutas inexistentes */}
      </Routes>
    </BrowserRouter>
  );
};

export default Router;