import React, { useState } from "react";
import Message from "./Message";
import { removeItem } from "localforage";
import CerrarBtn from "../img/cerrar.svg";

const Modal = ({ setModal, animarmodal, setAnimarmodal, savedata }) => {
  //  const [modalclass, setModalclass] = useState("animate-flip-down");

  //Estados para menejar los datos del formulario
  const [spend, setSpend] = useState("");
  const [quantity, setQuantity] = useState("");
  const [catgory, setCategory] = useState("");
  //--------------------------------------------------------------------------------------------------------------------------
  const [message, setMessage] = useState("");

  const handleHideModal = () => {
  
    //ocultando Modal

    setAnimarmodal(false); //Esto hace que primero se oculte el formulario...

    setTimeout(() => {
      setModal(false); 
      console.log("ok");
    }, 500);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    if (quantity <= 0 || [spend, quantity, catgory].includes("")) {
      setMessage("invalid data");

      setTimeout(() => {
        setMessage("");
      }, 3000);

      return;
    }
    savedata({ spend, quantity, catgory });
  };

  return (
    <div className={`modal`}>
      <div className="cerrar-modal">
        <img //Boton de cerrar el modal
          src={CerrarBtn}
          alt="Close Modal"
          onClick={handleHideModal}
          className="cursor-pointer animate-fade-left animate-delay-500 animate-ease-out"
        />
      </div>
      <form
        className={`formulario ${animarmodal ? "animar" : "cerrar"}`} 
        onSubmit={handleSubmit}
      >
        <legend>New Spend</legend>
        {message && <Message type="error ">{message}</Message>}

        <div className="campo">
          <label htmlFor="nombre">Spend</label>

          <input
            id="nombre"
            type="text"
            placeholder="add name of spend"
            value={spend}
            onChange={(e) => setSpend(e.target.value)} //
          />
        </div>
        <div className="campo">
          <label htmlFor="nombre">Quantity</label>

          <input
            id="nombre"
            type="number"
            placeholder="add Quantity of spend"
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
          />
        </div>

        <div className="campo">
          <label htmlFor="category">category</label>

          <select
            id="categoria"
            className="w-[100%]"
            value={catgory}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">-------------SELECT----------</option>
            <option value="ahorro">Ahorro</option>
            <option value="Comida">Comida</option>
            <option value="Casa">Casa</option>
            <option value="Gastos">Gastos Varios</option>
            <option value="ocio">Ocio</option>
            <option value="Saud">Salud</option>
            <option value="Suscripciones">Suscripciones</option>
          </select>
        </div>

        <input type="submit" value="add Spend" />
      </form>
    </div>
  );
};

export default Modal;
