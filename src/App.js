import React, {Component} from 'react';
import LogoEscrito from './Component/IMG/Logo/LogoEscrito.png'
import './App.css';
import {Document, Page} from 'react-pdf'
import catalogo from './Component/Catalogo/catalogo.pdf'
import { pdfjs } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`


class App extends Component {

  state = {
    numPages : null,
    pageNumber: 1
  }

  onDocumentLoadSuccess = ({ numPages }) => {
    this.setState({numPages})
  }


render(){ 
  const {pageNumber, numPages} = this.state
  
  return (
    <div className="App">
        
          <img src={LogoEscrito} alt="logoEscrito"/>
        <section className="top-bar">
            <button className="btn" id="prev-page">
          <i className="fas fa-arrow-circle-left m-1"></i>Anterior
            </button>

          <span className="info-page">
            Página
              <span className="page-num">{pageNumber}</span>
            de
              <span className="page-cont">{numPages}</span>
          </span>
        <button className="btn" id="next-page">Próximo
                <i className="fas fa-arrow-circle-right m-1"></i>
        </button>
        </section>

        <section className="container">
          <Document file={catalogo} 
                    onLoadSuccess={this.onDocumentLoadSuccess}
                     >
                       
            <Page pageNumber={pageNumber} />
          </Document>

        </section>




    </div>
  );
  }
}

export default App;
