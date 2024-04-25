import React, { useState } from 'react'
import ComponenteHijo2 from './ComponenteHijo2'
import ComponenteHijo from './ComponenteHijo'

const Padre = () => {
  const [estadoPadre, setEstadoPadre] = useState()

  const handleClick = (estadoPadre) => { 
    // Cambiamos el estado del padre
    setEstadoPadre(estadoPadre)
  }
  return (
    <div>
      <p>{estadoPadre}</p>
      <ComponenteHijo2 funcion={handleClick} />
      <ComponenteHijo state={ estadoPadre} />
    </div>
  )
}

export default Padre
