import React from "react";
import NewBudget from "./NewBudget";
import BudgetControl from "./BudgetControl";

const Header = ({ 
    budget, //Presupuesto 
    setBudget, 
    isvalid, //ValidaPresupesto
    setIsvalid }) => {
    return (
        <header>
            <h1 className="animate-fade-down font-extrabold">Cost Planner!</h1>

           {/* hacemos un renderizado condicional si "isvalid" es true entonces renderizamos
           el componente: "<BudgetControl>" si es falso renderizamos el componente del 
           formulario: "<NewBudget>" */}
            {isvalid ? (
                <BudgetControl
                budget={budget}
                ></BudgetControl>
            ) : (
                <NewBudget //Form(Formulario que maneja el valor ingresado por el usuario)
                    budget={budget}
                    setBudget={setBudget}
                    isvalid={isvalid}
                    setIsvalid={setIsvalid}//en el formulario actualizamos "isvalid"
                />
            )}
        </header>
    );
};

export default Header;
