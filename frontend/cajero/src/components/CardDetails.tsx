import { useEffect, useState } from "react";
import { obtenerSaldo } from "../api"; // Ajusta el nombre si tu función se llama diferente
import { Link } from "react-router-dom";


export function CardDetails() {
  const [saldo, setSaldo] = useState<number | null>(null);
  const [error, setError] = useState("");

  useEffect(() => {
    obtenerSaldo()
      .then((data) => setSaldo(data)) 
      .catch(() => setError("No se pudo obtener el saldo"));
  }, []);

  return (
    <div className="w-[30%] flex justify-center items-center flex-col bg-[#222a33] p-6 rounded-md">
      <h2 className="text-[#fff] text-[2rem] font-bold">Saldo en Total</h2>
      {error && <p className="text-red-500">{error}</p>}
      {saldo !== null ? (
        <>
          <p className="text-green-500 font-bold text-2xl">${saldo.toLocaleString()}</p>
          <Link to="/" className="w-full mt-3 bg-[#202c3a] text-white p-2 rounded-sm cursor-pointer hover:bg-[#0e141b]"><button className="w-full bg-[#202c3a] text-white p-2 rounded-sm cursor-pointer hover:bg-[#0e141b]">Volver</button></Link>
        </>
      ) : (
        <p>Cargando saldo...</p>
      )}
    </div>
  );
}