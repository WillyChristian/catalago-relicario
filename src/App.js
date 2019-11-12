import React, {Component} from 'react';
import LogoEscrito from './Component/IMG/Logo/LogoEscrito.png'
import './App.css';
import catalogo from './Component/Catalogo/catalogo.pdf'
import { PDFReader } from 'reactjs-pdf-reader';

class App extends Component {
  
  state = {
    numPages : null,
    pageNumber: 1
  }
  
  totalPage = (page) =>{
    this.setState({numPages: page})
  }
  changePage = offset => this.setState(prevState => ({
    pageNumber: prevState.pageNumber + offset,
  }))
  
  pagAnterior = () => this.changePage(-1)
  pagPosterior = () => this.changePage(1)
  
 
  render(){ 
  const {pageNumber, numPages} = this.state


  return (
    <div className="App">
        
          <img src={LogoEscrito} alt="logoEscrito"/>
        

{/****************** NAVEGAÇÃO ************************/}          
        <section className="top-bar">

          <button className="btn" id="prev-page" disabled={pageNumber <= 1} onClick={this.pagAnterior}>
            <i className="fas fa-arrow-circle-left m-1"></i>Anterior
          </button>

          <span className="info-page">
            Página
              <span className="page-num">{pageNumber || (numPages ? 1 : '--')}</span>
            de
              <span className="page-cont">{numPages || '--'}</span>
          </span>

          <button className="btn" id="next-page" disabled={pageNumber >= numPages} onClick={this.pagPosterior} >
            Próximo
                  <i className="fas fa-arrow-circle-right m-1"></i>
          </button>
        </section>

{/****************** CONTEÚDO ************************/}     
        <section className="doc-cont">
        <PDFReader 
          url={catalogo}  
          onDocumentComplete={this.totalPage}
          page={pageNumber}
          width="400"
        />
        </section>


{/****************** RODA-PÉ ************************/}     
        <section className="bottom-bar">

          <button className="btn" id="b-prev-page" disabled={pageNumber <= 1} onClick={this.pagAnterior}>
            <i className="fas fa-arrow-circle-left m-1"></i>Anterior
          </button>

          <button className="btn" id="b-next-page" disabled={pageNumber >= numPages} onClick={this.pagPosterior} >
            Próximo
                  <i className="fas fa-arrow-circle-right m-1"></i>
          </button>
        </section>


    </div>
  );
  }
}

export default App
