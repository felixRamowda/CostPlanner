import React from "react";

const BudgetControl = ({ budget }) => {
    const FormatQuantity = (Quantity) => {
        return Quantity.toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
        });
    };

    return (
        <div className="contenedor-presupuesto contenedor sombra dos-columnas">
            <div>
                <p>here grafic</p>
            </div>

            <div className="contenido-presupuesto">
                <p>
                    <span>Budget: {FormatQuantity(budget)}</span>
                </p>
                <p>
                    <span>Avaible: {FormatQuantity(0)}</span>
                </p>
                <p>
                    <span>spend: {FormatQuantity(0)}</span>
                </p>
            </div>
        </div>
    );
};

export default BudgetControl;
