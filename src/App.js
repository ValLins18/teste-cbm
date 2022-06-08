import React from 'react';
import './App.css';
import Home from './Pages/Home';
import DadosPessoais from './Pages/DadosPessoais';
import Experiencia from './Pages/Experiencia';

function App() {
  return (
    <div className="App center">
      {/* <Experiencia/> */}
      <DadosPessoais/>
    </div>
  );
}

export default App;
