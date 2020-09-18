import React, { Component } from "react";
import axios from "axios";

export default class Categorias extends Component {
	async componentDidMount() {
		const res = await axios.get(`http://localhost:8080/categoarias/`);

		console.log(res);
	}

	render() {
		return <div>CATEGORIAS</div>;
	}
}
