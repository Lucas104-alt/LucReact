import React from 'react'

const SegundoComponente = () => {
  let web = "https://lucas104-alt.github.io/LucasWeb/"
  let todobien = "Todo Bien?"
   const cambiartexto = (nuevotexto) => {
   todobien = nuevotexto;


   }
  

  return (
    <div>
      <h2>{todobien}</h2>
      <button onClick={ e => cambiartexto("OK")}></button>
      <ul>
     Aprendi:
     <li>HTML Con CSS</li>
     <li>Electron</li>
     <li>React (Esta Es La Appicacion)</li>
     Y  Mas
     
     


      </ul>
    <h6>Mi Pagina Web Es {web}</h6>
    </div>
  )
}

export default SegundoComponente
