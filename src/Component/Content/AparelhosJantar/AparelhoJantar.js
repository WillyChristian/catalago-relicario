import React from "react"
import NavButtons from "../EstruturaCatalogo/NavButtons.js"
import LikeBar from "../../Likes/LikeBar.js"
import "../EstruturaCatalogo/StyleCatalogo.css"

import p001 from '../../IMG/AparelhosJantar/p001.jpg'
import p002 from '../../IMG/AparelhosJantar/p002.jpg'
import p003 from '../../IMG/AparelhosJantar/p003.jpg'
import p004 from '../../IMG/AparelhosJantar/p004.jpg'
import p005 from '../../IMG/AparelhosJantar/p005.jpg'
import p006 from '../../IMG/AparelhosJantar/p006.jpg'
import p007 from '../../IMG/AparelhosJantar/p007.jpg'
import p008 from '../../IMG/AparelhosJantar/p008.jpg'
import p009 from '../../IMG/AparelhosJantar/p009.jpg'
import p010 from '../../IMG/AparelhosJantar/p010.jpg'

export default class Moveis extends React.Component {
constructor(props) {
  super(props);
  this.state = { 
    imagem:[p001,p002,p003,p004,p005,p006,p007,p008, p009, p010],
    pagAtual: 0,
    showPage: [p001],
    count: 0
  };
}

next = (props) => {
  let pagAtual = this.state.pagAtual
  let showPage = this.state.showPage
  const imagens = this.state.imagem

  if(pagAtual < imagens.length){
    pagAtual += 1
    showPage = imagens[pagAtual]
  }
   return this.setState({pagAtual, showPage})
}

prev = (props) => {
  let pagAtual = this.state.pagAtual
  let showPage = this.state.showPage
  const imagens = this.state.imagem

  if(pagAtual < imagens.length){
    pagAtual -= 1
    showPage = imagens[pagAtual]
  }
   return this.setState({pagAtual, showPage})
}

// Configura a quantidade de likes que o catálogo recebeu
likeCount = () => {
   this.setState({count: this.state.count + 1})   
};
  render(){
    return  (
      <div>
      {/********************************** NAVEGAÇÃO ****************************************/}
          <NavButtons next={this.next} prev={this.prev} current={this.state} />


        {/********************************** CONTEÚDO DO CATÁLOGO ****************************************/}
        <div className="conteudo">
          <img src={this.state.showPage} alt="imagem" className="img-catalogo"/>
        </div>

        {/********************************** AVALIAÇÃO / LIKES ****************************************/} 
           {/*<LikeBar likeCount={this.likeCount}  count={this.state}/>*/}
       
        </div>
  )}
}
