import React from 'react'

export default class NotFound extends React.Component{
  render(){
    return (
      <div style={{textAlign: 'center'}}>
        <h1 style={{fontSize: '3rem', marginTop: '80px'}}>404</h1>
        <p><strong>Página no encontrada.</strong><br /><br />Es probable que tu link haya expirado o<br/>tengas un error en la escritura el URL.</p>
      </div>
    )
  }
}
