import React from "react";
import * as ReactBootstrap from "react-bootstrap";
//import Categorias from "../Categorias/Categorias";
import "./RightColumn.css";

function RightColumn() {
	return (
		<React.Fragment>
			<React.Fragment>
				<ReactBootstrap.CardColumns className="d-flex">
					<div className="publicidad publicidad-1"></div>
					<div className="publicidad publicidad-2"></div>
					<div className="publicidad publicidad-3"></div>
				</ReactBootstrap.CardColumns>
			</React.Fragment>
		</React.Fragment>
	);
}

export default RightColumn;
