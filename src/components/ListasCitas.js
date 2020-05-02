import React from "react";
import Cita from "./Cita";
import PropTypes from "prop-types";

const ListasCitas = ({ citasMostrar, eliminarCita }) => {
  const mensaje =
    Object.keys(citasMostrar).length === 0
      ? "No hay citas"
      : "Administra las citas aquí";
  return (
    <div className="card mt-2 py-5">
      <div className="card-body">
        <h2 className="card-title text-center">{mensaje}</h2>

        <div className="lista-citas">
          {citasMostrar.map((cita) => (
            <Cita key={cita.id} cita={cita} eliminarCita={eliminarCita} />
          ))}
        </div>
      </div>
    </div>
  );
};

ListasCitas.propTypes = {
  citasMostrar: PropTypes.array.isRequired,
  eliminarCita: PropTypes.func.isRequired,
};

export default ListasCitas;
