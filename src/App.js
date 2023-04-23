import './App.css';
import freeCodeCampLogo from './img/freecodecamp.png';
import Boton from './componentes/Boton';
import Contador from './componentes/Contador';
import { useState } from 'react';

function App() {

  const [numClicks, setNumClicks] = useState(0);

  const manejarClick = () => {
    console.log('Clicked');
    setNumClicks(numClicks + 1);


  }
  const reiniciarContador = () => {
    console.log('Reiniciado');
    setNumClicks(numClicks == 0);

  }
  return (
    <div className="App">
      <div className='freecodecamp-logo-contenedor'>
        <img
        className='freecodecamp-logo'
        src={ freeCodeCampLogo }
        alt='Logo de freeCodeCamp' />
      </div>
      <div className='contenedor-contador'>
        <Contador
        numClicks={numClicks ? numClicks : 0} />
        <Boton
        texto='Click'
        esBotonDeClick={true}
        manejarClick={manejarClick} />
        <Boton
        texto='Reiniciar'
        esBotonDeClick={false}
        manejarClick={reiniciarContador} />
      </div>
    </div>
  );
}

export default App;
