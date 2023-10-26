import { useState, useEffect } from "react";
import Header from "./components/Header";
import ListSpend from "./components/ListSpends/ListSpend";
import Modal from "./components/Modal";
import { generarId } from "./helpers";
import { formatdate } from "./helpers";
import iconNewSpend from "./img/nuevo-gasto.svg";

export default function App() {
  const [budget, setBudget] = useState(0); // use budget(presupuesto)
  const [isvalid, setIsvalid] = useState(false); // Validate the budget(valida el prepuesto al inicio inicia en False al no ser un presupuesto valido al comenzar)
  const [modal, setModal] = useState(false); //Modal(fomulario flotante para agregar un nuevo gasto)
  const [animarmodal, setAnimarmodal] = useState(false); //Controla la clase

  const [expenses, setExpenses] = useState([]); // Este estado sera un array de objetos el cual almacenara los datos de gastos que vienen de Modal

  //Funcion para funcionalidad del Boton flotante!(nuevo gasto)
  const handleNewSpend = () => {
    setModal(true);

    setAnimarmodal(false);
    setTimeout(() => {
      setAnimarmodal(true);
    }, 500);
  };
  //objeto de gastos guardados por el usuario
  const savedata = (data) => {
    data.id = generarId(); //data.id = generarId() "Es la manera de generar un nuevo campo al objeto con el nombre: id que sera igual a la funcion para genrar id"
    data.date = formatdate(Date.now());
    setExpenses([...expenses, data]);
    console.log(data);

    setAnimarmodal(false); //Esto hace que primero se oculte el formulario...

    setTimeout(() => {
      setModal(false);
      console.log("ok");
    }, 500);
  };

  return (
    <>
      <div className="">
        <Header
          budget={budget}
          setBudget={setBudget}
          isvalid={isvalid}
          setIsvalid={setIsvalid}
        />
        {/*  
         Se valida si "isvalid es si es true para mostrar el boton"
         */}
        {isvalid && (
          <>
            <main>
              <ListSpend
                expenses={expenses} //Le pasamos "expenses  objeto de gastos"
              />
            </main>
            <div className="nuevo-gasto animate-bounce">
              <img
                src={iconNewSpend}
                alt=" Icon New Spend"
                onClick={handleNewSpend}
              />
            </div>
          </>
        )}
        {modal && (
          <Modal //formulario desplegale
            setModal={setModal}
            animarmodal={animarmodal}
            setAnimarmodal={setAnimarmodal}
            savedata={savedata} //savedata es una funcion pasada como props
          ></Modal>
        )}
      </div>
    </>
  );
}
