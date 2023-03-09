import React,{Component} from "react";


class Card extends Component{
    
    render(){
        const{nombre,imagen,especie,origen}= this.props
        return(
            <div className="card-personaje">
                <img className="card-imagen" src={imagen} alt={nombre}/>
                <h4 className="card-titulo">{nombre}</h4>
                <p className="card-texto">Especie: {especie}</p>
                <p className="card-texto">Origen: {origen}</p>

            </div>
        )
    }

}
export default Card;