import {useState, useEffect} from "react"
import axios from 'axios'
import Card from './Card'

function Noticias(props){
    //iniciar estado 
    const [noticias, setNoticias] = useState([])//inicio el estado noticias con useState como una lista vacia
    const getNoticias = ()=>{
        const URLnoticias= 'https://www.rtve.es/api/noticias.json'
        axios.get(URLnoticias)
            .then(response=> setNoticias(response.data.page.items))
            .catch(error=>console.log(error))

    }
    useEffect(()=>getNoticias(),[])//si paso un arreglo vacio como segundo argumento de UseEffect , solo se renderizara una vez
    //renderizacion condicional
    if(noticias.length ===0){
        return <h2>Cargando Noticias</h2>
    }
    return(
        <>
            <h2>Se encontraron {noticias.length} noticias</h2>
            <div>
                {noticias.map(noticia=>{
                    return (
                        <Card
                            key={noticia.id}
                            titulo={noticia.title}
                            descripcion={noticia.longTitle}
                            imagen={noticia.image}
                            url={noticia.htmUrl}
                        
                        />
                    )

                })}
            </div>
        
        </>
    )


}
export default Noticias