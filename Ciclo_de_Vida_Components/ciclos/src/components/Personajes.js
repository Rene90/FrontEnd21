import React, {Component} from "react";
import Card from "./Card";
import axios from "axios"

class Personajes extends Component{
    //iniciar componente usando constructor, es como una funcion que se inicia cada vez que se crea un objeto de esta clase
    //Usamos la palabra reservada super para heredar los atributos de Component de React, y lo que se recibe es props de nuevo
    constructor(props){
        super(props)
        //Cuando se llama el constructor, es porque se esta iniciando un objeto de esta clase, podemos iniciar el state o variables de estado para poder manipular el componente cuando este exista dentro del DOM
        this.state = {personajes:[]}//en este caso,mi estado tiene una lista llamada personajes que se va a iniciar vacia.

    }
    //Por lo general, cuando renderizo un componente con un estado que depende de una llamada a un servidor o base de datos, tengo manejar la vida del componente, es decir decidir cuando se renderiza o se muestra o se monta en el DOM
    componentDidMount(){
        const URL = "https://rickandmortyapi.com/api/character"
        axios.get(URL).then(response =>{
            this.setState({personajes:response.data.results})
        }).catch(error=>console.log(error))
    }
    render(){
        const {personajes} = this.state
        if (personajes.length===0){
            return <h2>Haciendo consulta a API de Rick y Morty </h2>
        }else if(personajes.length>0){
            return(

                <>
                    <h2>Se encontraron {personajes.length} personajes</h2>
                    <div>
                        {personajes.map(personaje=>{
                            return (
                                <Card
                                    key={personaje.id}
                                    nombre={personaje.name}
                                    especie={personaje.species}
                                    origen = {personaje.origin.name}
                                    imagen = {personaje.image}
                                />
                            )

                        })}
                    </div>
                </>
            )
        }
    }



}


export default Personajes