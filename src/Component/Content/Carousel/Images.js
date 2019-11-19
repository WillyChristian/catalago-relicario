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


constructor(props) {
  super(props);
  this.state = { 
 		imagem:[p1,p2,p3,p4,p5,p6,p7,p8,p9,p10,p11,p12,p13,p14,p15],
 		pagAtual: 0,
 		proxPag: 0,
  };
}


const proxPag = (props) => {
	const pagAtual = this.state.pagAtual
	const totPage = this.state.imagem.length()
	if(pagAtual < totPage){
		pagAtual += 1
	}
  return this.setState({pagAtual})
	// <img src={imagem[2]} alt="teste"/>  
}

export default proxPag;