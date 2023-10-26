import React from "react";
/* Este componente sera el encargado del diseño de la lista de gasto es decir
el que lleva el listado de los diferentes gastos ingresados por el usuario */

const Spend = ({ e }) => {
  return (
    <div className="gasto sombra">
      <div className="contenido-gasto">
        <div className="descripcion-gasto">
          <p className="categoria">{e.catgory}</p>
          <p className="nombre-gasto">{e.spend}</p>
          <p className="fecha-gasto">
            Agregado el: {""}
            <span>{e.date}</span>
          </p>
        </div>
      </div>
      <p className="cantidad-gasto">${e.quantity}</p>
    </div>
  );
};

export default Spend;
