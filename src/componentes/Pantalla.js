import React from "react";
import '../hojas-de-estilo/Pantalla.css'

const Pantalla = ({ input }) => (            /*Componente como funcion flecha: Se define la constante para que no se reasigne el valor pantalla.  */
  <div className='input'>
    {input}
  </div>    
);

export default Pantalla;