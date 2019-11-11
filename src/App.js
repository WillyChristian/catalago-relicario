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
    </div>
  );
}

export default App;

/* 
       <header className="App-header">
      <img src="*" alt="Logo"/>

<div className="cont-img" data-spy="scroll" data-target="#myScrollspy" data-offset="1">    

<div class="container-fluid">
  <div class="row">
    <nav class="col-sm-3 col-4" id="myScrollspy">
      <ul class="nav nav-pills flex-column">

        <li class="nav-item">
          <a class="nav-link active" href="#section1">Section 1</a>
        </li>

        <li class="nav-item">
          <a class="nav-link" href="#section2">Section 2</a>
        </li>

        <li class="nav-item">
          <a class="nav-link" href="#section3">Section 3</a>
        </li>

        <li class="nav-item">
          <a class="nav-link" href="#section4">Section 4</a>
        </li>

        <li class="nav-item">
          <a class="nav-link" href="#section5">Section 5</a>
        </li>

        <li class="nav-item">
          <a class="nav-link" href="#section6">Section 6</a>
        </li>

        <li class="nav-item">
          <a class="nav-link" href="#section7">Section 7</a>
        </li>

        <li class="nav-item">
          <a class="nav-link" href="#section8">Section 8</a>
        </li>

        <li class="nav-item">
          <a class="nav-link" href="#section9">Section 9</a>
        </li>

        <li class="nav-item">
          <a class="nav-link" href="#section10">Section 10</a>
        </li>

        <li class="nav-item">
          <a class="nav-link" href="#section11">Section 11</a>
        </li>

        <li class="nav-item">
          <a class="nav-link" href="#section12">Section 12</a>
        </li>

        <li class="nav-item">
          <a class="nav-link" href="#section13">Section 13</a>
        </li>

        <li class="nav-item">
          <a class="nav-link" href="#section14">Section 14</a>
        </li>

        <li class="nav-item">
          <a class="nav-link" href="#section15">Section 15</a>
        </li>
      </ul>
    </nav>

    
    <div class="col-sm-9 col-8">

      <div className="img-container" id="section1">
        <Document file="./Component/Catalogo/pagina1.pdf" />
      </div>

      <div className="img-container" id="section2">
      </div>

      <div className="img-container" id="section3">
      </div>

      <div className="img-container" id="section4">
      </div>

      <div className="img-container" id="section5">
      </div>

      <div className="img-container" id="section6">
      </div>

      <div className="img-container" id="section7">
      </div>

      <div className="img-container" id="section8">
      </div>

      <div className="img-container" id="section9">
      </div>

      <div className="img-container" id="section10">
      </div>

      <div className="img-container" id="section11">
      </div>

      <div className="img-container" id="section12">
      </div>

      <div className="img-container" id="section13">

      </div>

      <div className="img-container" id="section14">
      </div>

      <div className="img-container" id="section15">
      </div>

    </div>
  </div>
</div>*/
