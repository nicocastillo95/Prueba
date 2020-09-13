import React, { Component } from 'react'
import axios from 'axios';
//import * as $ from 'jquery';
export default class NuevoPost extends Component {

    state = {
        categorias: [],
    }

    async componentDidMount() {
        const res = await axios.get('http://localhost:8080/categoria/');
        this.setState({ categorias: res.data })
    }











    render() {
        return (
            <form action="http://localhost:8080/post/5f55461776897a16bd76731d/nuevopost" enctype="multipart/form-data" method="POST">
                <div className="form-row">
                    <div className="col">
                        <input type="text" className="form-control" placeholder="Nombre" name="nombre" />
                    </div>

                </div>
                <div className="form-group">
                    <label for="exampleFormControlSelect1">Seleccionar categoria</label>
                    <select className="form-control" id="exampleFormControlSelect1" name="categoria">

                        {
                            this.state.categorias.map(categoria =>
                                <option value={categoria.nombre}>{categoria.nombre}</option>)
                        }
                    </select>
                </div>

                <div className="form-group">
                    <label for="exampleFormControlFile1">Subir archivo</label>
                    <input type="file" name='image' className="form-control-file" id="exampleFormControlFile1" /*onChange={this.onChangeImagen}*/ />

                </div>
                <button type="submit" className="btn btn-primary"  >Guardar</button>
            </form>
        )
    }
}

