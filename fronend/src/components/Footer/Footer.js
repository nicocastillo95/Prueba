import React from "react";
import * as ReactBootstrap from "react-bootstrap";

export default function Footer() {
	return (
		<React.Fragment>
			<div sticky="bottom" fixed="bottom">
				© 2020 Copyright:
				<a href="https://github.com/nicocastillo95/Trabajo-Final---Diplomatura-JS---Neptuno">
					{" "}
					Neptuno.com{" "}
				</a>
			</div>
		</React.Fragment>
	);
}
