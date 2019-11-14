import React, { Component } from "react";
import catalogo from "./catalogo-estofados.pdf";
import "./style.css";
import { PDFReader } from "reactjs-pdf-reader";

export default class Catalogo extends Component {
  state = {
    numPages: null,
    pageNumber: 1
  };

  totalPage = page => {
    this.setState({ numPages: page });
  };
  changePage = offset =>
    this.setState(prevState => ({
      pageNumber: prevState.pageNumber + offset
    }));

  pagAnterior = () => this.changePage(-1);
  pagPosterior = () => this.changePage(1);

  render() {
    const { pageNumber, numPages } = this.state;
    return (
      <div>
        {/****************** NAVEGAÇÃO ************************/}
        <section className="top-bar">
          <button
            id="prev-page"
            className="btn"
            onClick={this.pagAnterior}
            disabled={pageNumber <= 1}
          >
            Anterior
            <i className="fas fa-arrow-circle-left m-1"></i>
          </button>
          <span className="info-page">
            Página
            <span className="page-num">
              {pageNumber || (numPages ? 1 : "--")}
            </span>
            de
            <span className="page-cont">{numPages || "--"}</span>
          </span>
          <button
            className="btn"
            id="next-page"
            disabled={pageNumber >= numPages}
            onClick={this.pagPosterior}
          >
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
      </div>
    );
  }
}
