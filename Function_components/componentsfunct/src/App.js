import ComponenteFuncional from './components/ComponenteFuncional'
import Tarjeta from './components/Tarjeta'
import axios from 'axios'
import './App.css';

var ulrPokemon = 'https://pokeapi.co/api/v2/pokemon/pikachu/'
var pikachu
axios
    .get(ulrPokemon)
    .then(response=>{
      pikachu = response.data
    })
    .catch(error=>console.log(error))
function App() {
  return (
    <>
      <h2>Pokedex usando componentes funcion</h2>
      <ComponenteFuncional/>
      <Tarjeta nombre={pikachu.name} imagen={pikachu.sprites.front_shiny} peso={pikachu.weight} altura={pikachu.height}/>
    </>
  );
}

export default App;
