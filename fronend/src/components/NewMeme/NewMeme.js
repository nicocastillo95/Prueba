import React from "react";
import * as ReactBootstrap from "react-bootstrap";

function MyVerticallyCenteredModal(props) {
	return (
		<ReactBootstrap.Modal
			{...props}
			size="lg"
			aria-labelledby="contained-modal-title-vcenter"
			centered
		>
			<ReactBootstrap.Modal.Header closeButton>
				<ReactBootstrap.Modal.Title id="contained-modal-title-vcenter">
					<h4>Crear un nuevo Meme</h4>
				</ReactBootstrap.Modal.Title>
			</ReactBootstrap.Modal.Header>
			<ReactBootstrap.Modal.Body>
				<ReactBootstrap.Form>
					<ReactBootstrap.Form.Group controlId="formBasicEmail">
						<ReactBootstrap.Form.Label>
							Título de la publicación
						</ReactBootstrap.Form.Label>
						<ReactBootstrap.Form.Control
							type="email"
							placeholder="Ingresar título"
						/>
					</ReactBootstrap.Form.Group>

					<ReactBootstrap.Form.Group controlId="exampleForm.ControlSelect1">
						<ReactBootstrap.Form.Label>
							Selecciona una categoría
						</ReactBootstrap.Form.Label>
						<ReactBootstrap.Form.Control as="select">
							<option>1</option>
							<option>2</option>
							<option>3</option>
							<option>4</option>
							<option>5</option>
						</ReactBootstrap.Form.Control>
					</ReactBootstrap.Form.Group>

					<ReactBootstrap.Form.Group>
						<ReactBootstrap.Form.File
							id="exampleFormControlFile1"
							label="(Solo formatos jpg, png o gif)"
						/>
					</ReactBootstrap.Form.Group>
				</ReactBootstrap.Form>
			</ReactBootstrap.Modal.Body>
			<ReactBootstrap.Modal.Footer>
				<ReactBootstrap.Button onClick={props.onHide}>
					Publicar
				</ReactBootstrap.Button>
			</ReactBootstrap.Modal.Footer>
		</ReactBootstrap.Modal>
	);
}

export default function NewMeme() {
	const [modalShow, setModalShow] = React.useState(false);

	return (
		<React.Fragment>
			<ReactBootstrap.Nav.Link
				href="#home"
				variant="primary"
				className="center-v-h"
				onClick={() => setModalShow(true)}
			>
				<div className="icon more-icon"></div>
				Nuevo Meme...
			</ReactBootstrap.Nav.Link>
			<MyVerticallyCenteredModal
				show={modalShow}
				onHide={() => setModalShow(false)}
			/>
		</React.Fragment>
	);
}
