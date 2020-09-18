import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class PaginaPrincipal extends Component {
	render() {
		return (
			<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
				<button
					class="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarTogglerDemo01"
					aria-controls="navbarTogglerDemo01"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span class="navbar-toggler-icon"></span>
				</button>
				<div class="collapse navbar-collapse" id="navbarTogglerDemo01">
					<Link className="navbar-brand" to="/">
						Neptuno
					</Link>
					<ul class="navbar-nav mr-auto mt-2 mt-lg-0">
						<li class="nav-item active">
							<Link className="nav-link" to="/"></Link>
						</li>

						<li class="nav-item">
							<Link className="nav-link" to="/categorias">
								Categorias
							</Link>
						</li>
						<li class="nav-item">
							<Link className="nav-link" to="/nuevoPost">
								Nuevo Post
							</Link>
						</li>
						<li class="nav-item">
							<Link className="nav-link" to="/registrar">
								Registrar
							</Link>
						</li>
						<li class="nav-item">
							<Link className="nav-link" to="/login">
								Login
							</Link>
						</li>
						<li class="nav-item">
							<Link className="nav-link" to="/logout">
								Logout
							</Link>
						</li>
					</ul>
					<form class="form-inline my-2 my-lg-0">
						<input
							class="form-control mr-sm-2"
							type="search"
							placeholder="Search"
							aria-label="Search"
						/>
						<button class="btn btn-outline-success my-2 my-sm-0" type="submit">
							Search
						</button>
					</form>
				</div>
			</nav>
		);
	}
}
