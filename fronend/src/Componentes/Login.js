import React from 'react'

import Axios from 'axios';




export default class Login extends React.Component {

    constructor() {
        super()
        let logeado = false;
        
        const token = localStorage.getItem("token")
        if (token) {logeado = true;}
        
        this.state = {
            email: '',
            contrasenia: '',
            logeado
        }
        this.onChange = this.onChange.bind(this)
        this.formSubmit = this.formSubmit.bind(this)
    }



    onChange(objeto) {
        this.setState({
            [objeto.target.name]: objeto.target.value
        })
    }

    async formSubmit(objeto) {
        objeto.preventDefault()
        const { email, contrasenia } = this.state;
        const token = await Axios.post("http://localhost:8080/usuarios/login", { email, contrasenia })
        console.log(localStorage.getItem('token'))
        localStorage.setItem('token', token.data.token);
        this.setState({
            logeado: true
        })


        localStorage.setItem('usuario',token.data.usuario._id);
    }


    render() {
      /* if (this.state.logeado) {
            return <Redirect to="/user" />
        }*/
        return (
            <form onSubmit={this.formSubmit}>
                <div className="form-group">
                    <label for="exampleInputEmail1">Email</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"  value={this.state.email} onChange={this.onChange} name="email" />
                    <small id="emailHelp" className="form-text text-muted">
                        Nunca compartiremos su correo electrónico con nadie.</small>
                </div>
                <div className="form-group">
                    <label for="exampleInputPassword1">Contrasenia</label>
                    <input type="password" className="form-control" id="exampleInputPassword1"   value={this.state.contrasenia} onChange={this.onChange} name="contrasenia" />
                </div>

                <button type="submit" className="btn btn-primary">Acceder</button>
            </form>
        )
    }
}

