import React from "react";
import Spend from "./Spend";
const ListSpend = ({ expenses }) => {
  return (
    <div className="listado-gastos contenedor">
      <h2>{expenses.length ? "Gastos" : "No expenses"}</h2>
      {expenses.map((e) => (
        <Spend key={e.id} e={e} />
      ))}
    </div>
  );
};

export default ListSpend;
