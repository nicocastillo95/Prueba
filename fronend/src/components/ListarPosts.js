import React, { Component } from "react";
import * as ReactBootstrap from "react-bootstrap";
import axios from "axios";

export default class ListarPosts extends Component {
	state = {
		post: [],
	};

	async componentDidMount() {
		const res = await axios.get("http://localhost:8080/post/");
		console.log(res.data);
		this.setState({
			post: res.data,
		});
	}

	render() {
		return (
			<React.Fragment>
				<ReactBootstrap.CardColumns>
					{this.state.post.map((post) => (
						<ReactBootstrap.Card className="meme">
							<ReactBootstrap.Card.Img
								variant="top"
								src={post.url}
								className="img-fluid rounded mx-auto d-block"
								alt={post.categoria}
							/>
							<div className="meme-actions">
								<div class="icon icon-positivo"></div>
								<div class="icon icon-negativo"></div>
								<div class="icon icon-comentario"></div>
							</div>
							<ReactBootstrap.Card.Body className="rounded">
								<ReactBootstrap.Card.Title>
									{post.nombre}
								</ReactBootstrap.Card.Title>
								<ReactBootstrap.Accordion defaultActiveKey="">
									<ReactBootstrap.Card>
										<ReactBootstrap.Accordion.Toggle
											as={ReactBootstrap.Button}
											eventKey="0"
											className="btn-sm"
										>
											Ver comentarios
										</ReactBootstrap.Accordion.Toggle>
										<ReactBootstrap.Accordion.Collapse eventKey="0">
											<ReactBootstrap.Card.Body>
												{post.nombre}
											</ReactBootstrap.Card.Body>
										</ReactBootstrap.Accordion.Collapse>
									</ReactBootstrap.Card>
								</ReactBootstrap.Accordion>

								<p className="card-text">
									<small className="text-muted">Puntaje: {post.puntaje} </small>
									<small className="text-muted">
										({post.nombre} positivos)
									</small>
									<small className="text-muted">
										({post.nombre} negativos)
									</small>
								</p>
							</ReactBootstrap.Card.Body>
						</ReactBootstrap.Card>
					))}
				</ReactBootstrap.CardColumns>
			</React.Fragment>
		);
	}
}
