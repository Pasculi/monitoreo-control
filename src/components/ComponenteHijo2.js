import React, { useState } from 'react'

const ComponenteHijo2 = ({ funcion }) => {
  const [estadoHijo, setEstadoHijo] = useState('Andrea');
  return (
    <div>
      {funcion(estadoHijo)}
      <h2>Estado Componente Hijo 2 : {estadoHijo}</h2>
    </div>
  )
}

export default ComponenteHijo2
