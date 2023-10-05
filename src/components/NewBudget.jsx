import React from "react";
import { useState } from "react";
import Message from "./Message";

const NewBudget = ({ budget, setBudget, isvalid, setIsvalid }) => {
    const [message, setMesaage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!Number(budget) || Number(budget) < 0) {
            setMesaage("the budget is not valid");
            setBudget("");
            return;
        }

        setIsvalid(true);
        setMesaage("");
    };

    return (
        <div className={`contenedor contenedor-presupuesto sombra `}>
            <form className="formulario " onSubmit={handleSubmit}>
                <div className="campo">
                    <label>Define Budget</label>
                    <input
                        className="nuevo-presupuesto  "
                        type="text"
                        placeholder="add your Budget(Number)"
                        onChange={(e) => {
                            setBudget(Number(e.target.value));
                            // Actualizamos el estado del presupuesto de manera que sea de tipo Number()
                        }}
                    />
                </div>
                <input type="submit" value={"SEND"} />
                {message && <Message type="error ">{message}</Message>}
                {/* 
                Hacemos un renderizado condicional si Message es si y solo si igual a true
                 */}
            </form>
        </div>
    );
};

export default NewBudget;
