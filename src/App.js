import React from 'react';
import LogoEscrito from './Component/IMG/Logo/LogoEscrito.png'
import './App.css';

function App() {
  return (
    <div className="App">
        
          <img src={LogoEscrito} alt="logoEscrito"/>
        <section className="top-bar">
            <button className="btn" id="prev-page">
          <i className="fas fa-arrow-circle-left m-1"></i>Anterior
            </button>

          <span className="info-page">
            Página
              <span className="page-num"></span>
            de
              <span className="page-cont"></span>
          </span>
        <button className="btn" id="next-page">Próximo
                <i className="fas fa-arrow-circle-right m-1"></i>
        </button>
        </section>

        <section >
         
        <div className="container d-none">

          </div>
        </section>
    </div>
  );
}

export default App;
