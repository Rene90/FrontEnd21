import {useState} from 'react'

function Card(props){
    const {titulo, descripcion, imagen, url}= props
    //Usaremos useStaee para iniciar y modificar el estado y sus valores
    const [votos,setVotos] = useState(0)
    const [hasVoted,setHasVoted] = useState(false)//Un componente funcion puede tener n estados
    const decrementarVotos=()=>{
        setVotos(votos-1)//funciones para modificar los estados con sus respectivos set....
        setHasVoted(true)
    }
    const incrementarVotos=()=>{
        setVotos(votos+1)
        setHasVoted(true)
    }
    const renderizarBotones = ()=>{
        if(hasVoted === true){
            return (
                <>
                    <button disabled className="card-boton" onClick={decrementarVotos}>Abajo Voto</button>
                    <span>Votos:{votos}</span>
                    <button disabled className='card-boton' onClick={incrementarVotos}>Arriba Voto</button>
                </>
            )
        }else{
            return (
                <>
                    <button  className="card-boton" onClick={decrementarVotos}>Abajo Voto</button>
                    <span>Votos:{votos}</span>
                    <button  className='card-boton' onClick={incrementarVotos}>Arriba Voto</button>
                </>
            )

        }
    }
    return (
        <div className='card-noticia'>
            <img className='card-imagen' src={imagen} alt={titulo}/>
            <h4 className='card-titulo' >{titulo}</h4>
            <p className='card-descripcion' >{descripcion}</p>
            <a className='card-url' href={url} >Ver mas...</a>
            {renderizarBotones()}
        </div>
    )



}

export default Card