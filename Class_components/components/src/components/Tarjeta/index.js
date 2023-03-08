import React from 'react'
import './style.css'
 //Esta es la manera tradicional para pasar parametros desde el componente padre a traves de props
class Tarjeta extends React.Component {
    render (){
        return <div className='tarjeta-usuario' style={{background: this.props.color}}>

            <p>Nombre: {this.props.nombre}</p>
            <p>Direccion: {this.props.direccion}</p>
            <p>Telefono: {this.props.telefono}</p>
            <p>Correo: {this.props.correo}</p>
                


        </div>
        


    }


}
export default Tarjeta