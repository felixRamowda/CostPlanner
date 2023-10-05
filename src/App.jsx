import { useState, useEffect } from "react";
import Header from "./components/Header";
import iconNewSpend from "./img/nuevo-gasto.svg"

export default function App() {
    const [budget, setBudget] = useState(0); // use budget(presupuesto)
    const [isvalid, setIsvalid] = useState(false); // Validate the budget(valida el prepuesto al inicio inicia en False al no ser un presupuesto valido al comenzar)

    return (
        <>
            <div className="">
                <Header
                    budget={budget}
                    setBudget={setBudget}
                    isvalid={isvalid}
                    setIsvalid={setIsvalid}
                />
            </div>
        </>
    );
}
