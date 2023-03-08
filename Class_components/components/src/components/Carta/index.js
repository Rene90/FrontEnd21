import React from "react";
import "./style.css"
//Deconstruccion es una manera de recibir los parametros del elemento padre, la mayoria de los desarrolladores lo hacen de esta manera. Es una forma abreviada. Nos ahorra poner this.props para cada parametro 
class Carta extends React.Component{
    render(){

        const{nombre,telefono,direccion,color,correo} = this.props
        
        return <div className='tarjeta-usuario' style={{background: color}}>

            <p>Nombre: {nombre}</p>
            <p>Direccion: {direccion}</p>
            <p>Telefono: {telefono}</p>
            <p>Correo: {correo}</p>
                


        </div>

    }


}

export default Carta