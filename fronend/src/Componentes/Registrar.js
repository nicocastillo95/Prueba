import React, { Component } from 'react'
import axios from 'axios';

export default class Registrar extends Component {

    state = {
        nombre:'',
        apellido:'',
        email:'',
        contrasenia:''
    }

    async componentDidMount(){
        const res = await axios.get('http://localhost:8080/usuarios/');
    console.log(res)
    }
    

    onSubmit = async objeto =>{
        objeto.preventDefault();
       const res = await axios.post('http://localhost:8080/usuarios/registrar',{
            nombre: this.state.nombre,
            apellido: this.state.apellido,
            email: this.state.email,
            contrasenia: this.state.contrasenia
        });
        console.log(res)
        localStorage.setItem('token', res.data.token);
        localStorage.setItem('usuario',res.data.usuario._id);
    }

    onChangeNombre = (objeto)=>{
        this.setState({
            nombre: objeto.target.value,
        });

    };
    
    onChangeApellido = (objeto)=>{
        this.setState({
            apellido: objeto.target.value,
        })

    };
    onChangeEmail = (objeto)=>{
        this.setState({
            email: objeto.target.value,
        })
    };

    onChangeContrasenia = (objeto)=>{
        this.setState({
            contrasenia: objeto.target.value,
        })
    }


    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <div class="form-row">
                    <div class="form-group col-md-6">
                        <label for="inputEmail4">Email</label>
                        <input type="email" class="form-control" id="inputEmail4" onChange = {this.onChangeEmail} />
                    </div>
                    <div class="form-group col-md-6">
                        <label for="inputPassword4">Contrasenia</label>
                        <input type="text" class="form-control" id="inputPassword4" onChange = {this.onChangeContrasenia} />
                    </div>
                </div>
                <div class="form-row">
                    <div class="col">
                        <input type="text" class="form-control" placeholder="Nombre" onChange = {this.onChangeNombre} />
                    </div>
                    <div class="col">
                        <input type="text" class="form-control" placeholder="Apellido" onChange = {this.onChangeApellido} />
                    </div>
                </div>
                <button type="submit" class="btn btn-primary">Registrarme</button>
            </form>
        )
    }
}

