import ComponenteClase from './components/ComponenteClase'
import Tarjeta from './components/Tarjeta/'
import Carta from './components/Carta/'
import './App.css';

function App() {
  return (
    <>
      <h2>Hola desde el componente APP</h2>
      <ComponenteClase/>
      <Tarjeta nombre="Quidel" direccion="Chile" telefono="56983247" correo="quidel@gmail.com" color="green"  />
      <Tarjeta nombre="Rene" direccion="Canada" telefono="541777878" correo="rene@gmail.com" color="blue"  />
      <Tarjeta nombre="Rolando" direccion="Chile" telefono="5695498" correo="Rolando@gmail.com" color="orange"  />
      <Tarjeta nombre="Cristobal" direccion="Chile" telefono="564984984" correo="cristobal@gmail.com" color="green"  />
      <Carta nombre="Benjamin" direccion="Chile" telefono="5498498498" correo="benjamin@gmail.com" color="red"  />
    </>
    
  );
}

export default App;
