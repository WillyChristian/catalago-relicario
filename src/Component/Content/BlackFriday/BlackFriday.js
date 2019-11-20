import React from 'react';
import p1 from '../../IMG/jpg/p1.jpg'
import p2 from '../../IMG/jpg/p2.jpg'
import p3 from '../../IMG/jpg/p3.jpg'
import p4 from '../../IMG/jpg/p4.jpg'
import p5 from '../../IMG/jpg/p5.jpg'
import p6 from '../../IMG/jpg/p6.jpg'
import p7 from '../../IMG/jpg/p7.jpg'
import p8 from '../../IMG/jpg/p8.jpg'
import p9 from '../../IMG/jpg/p9.jpg'
import p10 from '../../IMG/jpg/p10.jpg'
import p11 from '../../IMG/jpg/p11.jpg'
import p12 from '../../IMG/jpg/p12.jpg'
import p13 from '../../IMG/jpg/p13.jpg'
import p14 from '../../IMG/jpg/p14.jpg'
import p15 from '../../IMG/jpg/p15.jpg'

import NavButtons from "../EstruturaCatalogo/NavButtons.js"
import LikeBar from "../../Likes/LikeBar.js"
import "./style.css";


export default class BlackFriday extends React.Component {
constructor(props) {
  super(props);
  this.state = { 
 		imagem:[p1,p2,p3,p4,p5,p6,p7,p8,p9,p10,p11,p12,p13,p14,p15],
 		pagAtual: 0,
 		showPage: [p1],
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
		return 	(
			<div>
			{/********************************** NAVEGAÇÃO ****************************************/}
		        <section className="top-bar">
					<NavButtons next={this.next} prev={this.prev} current={this.state} />
    			</section>

    		{/********************************** CONTEÚDO DO CATÁLOGO ****************************************/}
				<div className="conteudo">
					<img src={this.state.showPage} alt="imagem"/>
       			</div>

    		{/********************************** AVALIAÇÃO / LIKES ****************************************/}	
		        <section className="like-bar">
          			<LikeBar likeCount={this.likeCount}  count={this.state}/>
        		</section>
		    </div>
	)}
}
