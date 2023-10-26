export const generarId = () => {
  const ramdon = Math.random().toString(36).substr(2);
  const fecha = Date.now().toLocaleString(36);
  return ramdon + fecha;
};

//configuracion de formatos de fecha
export const formatdate = (date) => {
  const dateNew = new Date(date);
  const opc = {
    year: "numeric",
    month: "long",
    day: "2-digit",
  };
  return dateNew.toLocaleDateString("es-ES", opc);
};
