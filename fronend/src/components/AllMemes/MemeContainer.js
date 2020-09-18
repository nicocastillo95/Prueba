import React from "react";
import Meme from "./Meme";
import "./Meme.css";
import { getMemesByPopular } from "../../services/memes";
import * as ReactBootstrap from "react-bootstrap";

class MemeContainer extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			memes: [],
			isFetch: true,
		};
	}

	async componentDidMount() {
		const responseJson = await getMemesByPopular();
		this.setState({ memes: responseJson.data.memes, isFetch: false });
	}

	render() {
		const { memes } = this.state;

		if (this.state.isFetch) {
			return (
				<ReactBootstrap.Button className="spinner" disabled block>
					<ReactBootstrap.Spinner
						as="span"
						animation="grow"
						size="sm"
						role="status"
						aria-hidden="true"
					/>
					<div></div>
					Loading...
				</ReactBootstrap.Button>
			);
		}
		return (
			<React.Fragment>
				<ReactBootstrap.CardColumns>
					{memes.map((meme) => (
						<Meme {...meme} key={meme.id} />
					))}
				</ReactBootstrap.CardColumns>
			</React.Fragment>
		);
	}
}

export default MemeContainer;
