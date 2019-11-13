import React, {useState} from "react";

export default class animaLogo extends React.Component {
state = {
	atributo: ""
}	
animaLogo = (value) => {
	console.log(this.atributo)
	const valor = value;
	return (
		this.setState({atributo: valor})
	)
};

	render() {

		return (
			console.log(this.atributo)
		)
	}
}






// export default animaLogo;
	// const [atributo, setAtributo] = useState(null)
