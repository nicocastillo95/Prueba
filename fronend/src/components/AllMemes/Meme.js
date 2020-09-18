import React from "react";
import PropTypes from "prop-types";
import * as ReactBootstrap from "react-bootstrap";

const Meme = ({ name, url, box_count }) => (
	<React.Fragment>
		<ReactBootstrap.Card className="meme">
			<ReactBootstrap.Card.Img
				variant="top"
				src={url}
				className="img-fluid rounded mx-auto d-block"
				alt="Responsive image"
			/>
			<div className="meme-actions">
				<div class="icon icon-positivo"></div>
				<div class="icon icon-negativo"></div>
				<div class="icon icon-comentario"></div>
			</div>
			<ReactBootstrap.Card.Body className="rounded">
				<ReactBootstrap.Card.Title>{name}</ReactBootstrap.Card.Title>
				<ReactBootstrap.Card.Text>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
					posuere erat a ante.
				</ReactBootstrap.Card.Text>

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
								Qué buen Meme !!!
							</ReactBootstrap.Card.Body>
						</ReactBootstrap.Accordion.Collapse>
					</ReactBootstrap.Card>
				</ReactBootstrap.Accordion>

				<p className="card-text">
					<small className="text-muted">{box_count} Likes</small>
				</p>
			</ReactBootstrap.Card.Body>
		</ReactBootstrap.Card>
	</React.Fragment>
);

Meme.propTypes = {
	name: PropTypes.string.isRequired,
	url: PropTypes.string.isRequired,
	box_count: PropTypes.number.isRequired,
};

export default Meme;
