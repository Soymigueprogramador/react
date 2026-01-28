// Importacion de react-router-dom
import { BrowserRouter, Routes, Route } from "react-router-dom"

const AsignandoRutas = () => {
  return (
    <div>
      {/* Implementacion de react-router-dom */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default AsignandoRutas
