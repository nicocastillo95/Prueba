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
      <ReactBootstrap.Modal.Header>
        <ReactBootstrap.Modal.Title id="contained-modal-title-vcenter">
          Logueo / Registro
        </ReactBootstrap.Modal.Title>
      </ReactBootstrap.Modal.Header>
      <ReactBootstrap.Modal.Body>

        <ReactBootstrap.Form>
          <ReactBootstrap.Form.Group controlId="formBasicEmail">
            <ReactBootstrap.Form.Label>Dirección email</ReactBootstrap.Form.Label>
            <ReactBootstrap.Form.Control type="email" placeholder="Ingresar email" />
            <ReactBootstrap.Form.Text className="text-muted">
              Nunca compartiremos tu email con nadie.
            </ReactBootstrap.Form.Text>
          </ReactBootstrap.Form.Group>

          <ReactBootstrap.Form.Group controlId="formBasicPassword">
            <ReactBootstrap.Form.Label>Contraseña</ReactBootstrap.Form.Label>
            <ReactBootstrap.Form.Control type="password" placeholder="Contraseña" />
          </ReactBootstrap.Form.Group>
        </ReactBootstrap.Form>
      </ReactBootstrap.Modal.Body>
      <ReactBootstrap.Modal.Footer>
        <ReactBootstrap.Button onClick={props.onHide}>
          Aceptar
        </ReactBootstrap.Button>
      </ReactBootstrap.Modal.Footer>
    </ReactBootstrap.Modal>
  );
}

export default function Login() {
  const [modalShow] = React.useState(true);

  return (
    <React.Fragment>
      <MyVerticallyCenteredModal show={modalShow} />
    </React.Fragment>
  );
}
