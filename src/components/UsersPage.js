import React from 'react'
import {Context} from './Context'


const UsersPage = () => {
  const contextoUser = React.useContext(Context);
  console.log(contextoUser)
  return (
    <div>
      <h1>Usuarios {contextoUser.user }</h1>
    </div>
  )
}

export default UsersPage
