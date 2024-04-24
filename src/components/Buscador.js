import React from 'react'
import { useParams } from 'react-router-dom';

const Buscador = () => {

  const { id } = useParams();
  console.log(id)
  return (
    <div>Buscador: {id}</div>
  )
}

export default Buscador