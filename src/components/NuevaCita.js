import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import PropTypes from "prop-types";

const stateInicial = {
  cita: {
    mascota: "",
    propietario: "",
    fecha: "",
    hora: "",
    sintomas: "",
  },
  error: false,
};

class NuevaCita extends Component {
  state = { ...stateInicial };

  //Cuando el usuario escribe en los inputs
  handleChange = (e) => {
    // console.log(e.target.name + ": " + e.target.value);

    //colocar lo que se esta escribiento en el input en el state

    this.setState({
      cita: {
        //siempre se recomienda tomar una copia del state de la siguiente forma, eso se hace con los tres puntos(spread operator):
        ...this.state.cita,

        [e.target.name]: e.target.value,
      },
    });
  };

  //cuando el usuario envia el formulario
  handleSubmit = (e) => {
    e.preventDefault();

    //extraer los valores del state
    const { mascota, propietario, fecha, hora, sintomas } = this.state.cita;
    // console.log(mascota);

    //validar que todos los campos esten llenos

    if (
      mascota === "" ||
      propietario === "" ||
      fecha === "" ||
      hora === "" ||
      sintomas === ""
    ) {
      this.setState({
        error: true,
      });

      //detener la ejecucion
      return;
    }

    //generar objeto con los datos
    const nuevaCita = { ...this.state.cita };
    nuevaCita.id = uuidv4();

    //Agregar la cita al state de App
    this.props.crearCita(nuevaCita);

    //colocar el stateInicial en el state
    this.setState({
      ...stateInicial,
    });
  };

  render() {
    const { error } = this.state;
    return (
      <div className="card mt-5 py-5">
        <div className="card-body ">
          <h2 className="card-title text-center mb-5">
            Llena el formulario para crear una nueva cita
          </h2>

          {error ? (
            <div className="alert alert-danger mt-2 mb-5 text-center">
              Todos los campos son obligatorios
            </div>
          ) : null}

          <form onSubmit={this.handleSubmit}>
            <div className="form-group row">
              <label htmlFor="" className="col-sm-4 col-lg-2 col-form-label">
                Nombre Mascota
              </label>
              <div className="col-sm-8 col-lg-10">
                <input
                  type="text"
                  name="mascota"
                  id=""
                  className="form-control"
                  placeholder="Nombre Mascota"
                  onChange={this.handleChange}
                  value={this.state.cita.mascota}
                />
              </div>
            </div>{" "}
            {/*termina form-group*/}
            <div className="form-group row">
              <label htmlFor="" className="col-sm-4 col-lg-2 col-form-label">
                Nombre Dueño
              </label>
              <div className="col-sm-8 col-lg-10">
                <input
                  type="text"
                  name="propietario"
                  id=""
                  className="form-control"
                  placeholder="Nombre Dueño Mascota"
                  onChange={this.handleChange}
                  value={this.state.cita.propietario}
                />
              </div>
            </div>{" "}
            {/*termina form-group*/}
            <div className="form-group row">
              <label htmlFor="" className="col-sm-4 col-lg-2 col-form-label">
                Fecha
              </label>
              <div className="col-sm-8 col-lg-4">
                <input
                  type="date"
                  name="fecha"
                  id=""
                  className="form-control my-1"
                  onChange={this.handleChange}
                  value={this.state.cita.fecha}
                />
              </div>

              <label htmlFor="" className="col-sm-4 col-lg-2 col-form-label">
                Hora
              </label>
              <div className="col-sm-8 col-lg-4">
                <input
                  type="time"
                  name="hora"
                  id=""
                  className="form-control my-1"
                  onChange={this.handleChange}
                  value={this.state.cita.hora}
                />
              </div>
            </div>{" "}
            {/*termina form-group*/}
            <div className="form-group row">
              <label htmlFor="" className="col-sm-4 col-lg-2 col-form-label">
                Sintomas
              </label>
              <div className="col-sm-8 col-lg-10">
                <textarea
                  name="sintomas"
                  id=""
                  className="form-control"
                  placeholder="Describe los sintomas"
                  onChange={this.handleChange}
                  value={this.state.cita.sintomas}
                ></textarea>
              </div>
            </div>{" "}
            {/*termina form-group*/}
            <input
              type="submit"
              className="py-3 mt-2 btn btn-success btn-block"
              value="Agregar Nueva Cita"
            />
          </form>
        </div>
      </div>
    );
  }
}

NuevaCita.propTypes = {
  crearCita: PropTypes.func.isRequired,
};

export default NuevaCita;
