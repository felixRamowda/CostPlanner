import React from "react";
import NewBudget from "./NewBudget";
import BudgetControl from "./BudgetControl";
import salary from "../img/salary.png";
const Header = ({
  budget, //Presupuesto
  setBudget,
  isvalid, //ValidaPresupesto
  setIsvalid,
}) => {
  return (
    <header>
      <div className="flex  gap-5 items-center justify-center animate-fade-down animate-delay-1300">
        <h1 className="font-extrabold">Cost Planner</h1>
        <img src={salary} alt="icon" />
      </div>
      {isvalid ? (
        <BudgetControl budget={budget}></BudgetControl>
      ) : (
        <NewBudget //Form(Formulario que maneja el valor ingresado por el usuario)
          budget={budget}
          setBudget={setBudget}
          isvalid={isvalid}
          setIsvalid={setIsvalid} //en el formulario actualizamos "isvalid"
        />
      )}
    </header>
  );
};

export default Header;
