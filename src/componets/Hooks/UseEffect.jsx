import { useEffect, useState } from 'react'

const UseEffect = () => {
  // Estado para contar renderizados
  const [contador, setContador] = useState(0)

  /*
    ¿Qué es useEffect?

    useEffect es un Hook que permite ejecutar código
    en determinados momentos del ciclo de vida del componente:
    - cuando se monta
    - cuando se actualiza
    - cuando se desmonta
  */

  useEffect(() => {
    console.log('El componente se montó o el contador cambió')

    // Cleanup (opcional)
    return () => {
      console.log('Cleanup: antes de desmontar o antes del próximo efecto')
    }
  }, [contador])

  return (
    <div>
      <h2>Ejemplo de useEffect</h2>
      <p>Contador: {contador}</p>

      <button onClick={() => setContador(contador + 1)}>
        Incrementar
      </button>
    </div>
  )
}

export default UseEffect