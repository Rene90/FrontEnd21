import './style.css'

function Tarjeta(props){
    const {nombre,imagen,peso,altura}= props
    return <div className ="card-personaje" >
                <h4 className='card-titulo'>Nombre: {nombre}</h4>
                <img className="card-imagen" src={imagen}/>
                <p className='card-texto'>Peso: {peso}</p>
                <p className='card-texto'>Altura:{altura}</p>
            </div>
}
export default Tarjeta