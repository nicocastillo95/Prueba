import React from "react";
import * as ReactBootstrap from "react-bootstrap";
import { BrowserRouter as Router, Route } from "react-router-dom";
import PaginaNoRegistrado from "./components/PaginaNavNoRegistrado";
import Registrar from "./components/Registrar";
import NuevoPost from "./components/NuevoPost";
import ListarPost from "./components/ListarPosts";
import Categorias from "./components/Categorias";
import Login from "./components/Login";
import Logout from "./components/Logout";
import PrivateRoute from "./components/RoutePrivado";
import MemeContainer from "./components/AllMemes/MemeContainer";
import Navbar from "./components/Navbar/Navbar";
import LeftColumn from "./components/LeftColumn/LeftColumn";
import RightColumn from "./components/RightColumn/RightColumn";

function App() {
	return (
		<Router>
			<Navbar />
			<ReactBootstrap.Container fluid="md">
				<ReactBootstrap.Row>
					<ReactBootstrap.Col xs={2} className="left-column rounded">
						<LeftColumn />
					</ReactBootstrap.Col>
					<ReactBootstrap.Col xs={8} className="center-column rounded">
						<PrivateRoute path="/nuevoPost" exact component={NuevoPost} />
						{/* <Route path="/" component={PaginaNoRegistrado} /> */}
						<Route path="/categorias" component={Categorias} />
						<Route path="/login" component={Login} />
						<Route path="/registrar" component={Registrar} />
						<Route path="/">
							<Route path="/" exact component={ListarPost} />
							<MemeContainer />
						</Route>
						<PrivateRoute path="/logout" exact component={Logout} />
					</ReactBootstrap.Col>
					<ReactBootstrap.Col xs={2} className="right-column rounded">
						<RightColumn />
					</ReactBootstrap.Col>
				</ReactBootstrap.Row>
			</ReactBootstrap.Container>
		</Router>
	);
}

export default App;
