import { cleanup } from '@testing-library/react'
import {useState, useEffect} from 'react'

function Ejemplo(){
    //Declarar una variavle de estado que llamaremos conteo
    const [conteo, setConteo] = useState(0)
    const [nombre,setNombre] = useState("Rene")
    const resta = ()=>setConteo(conteo-1)
    const suma = ()=>setConteo(conteo+1)
    const cambiarNombre = ()=>{

        if (nombre =="Rene"){
            setNombre("Roberto")
        }else{
            setNombre("Rene")
        }

    } 

    useEffect(()=>{
        //console.log(`Diste ${conteo} numero de clicks`)
        document.getElementById("titulo").innerHTML = `Diste ${conteo} numeros de clicks`
        return function cleanup(){
           //clean up se ejecuta para limpiar los efectos que se ejectuan dentro de useEffect antes de renderizar de nuevo, ejemplo cuando un usuario se logea y deslogea de una pagina de internet https://reactjs.org/docs/hooks-effect.html
            //document.getElementById("titulo").innerHTML = `Diste ${conteo} numero de clicks`
        }
    })
    return(
        <div>
            <h2 id='titulo'>Este es un simple contador</h2>
            <button onClick={resta}>Restar al contador</button>
            <button onClick={suma}>Sumar al contador</button>
            <p>Contador: {conteo}</p>
            <p>Nombre: {nombre}</p>
            <button onClick={cambiarNombre}>Cambiar nombre</button>

        </div>
    )




}
export default Ejemplo