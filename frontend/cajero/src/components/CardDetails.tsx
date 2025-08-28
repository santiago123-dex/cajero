import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { obtenerSaldo } from "../api"; // Ajusta el nombre si tu función se llama diferente


export function CardDetails() {
  const [saldo, setSaldo] = useState<number | null>(null);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    obtenerSaldo()
      .then((data) => setSaldo(data)) 
      .catch(() => setError("No se pudo obtener el saldo"));
  }, []);

  const handleConfirmar = async() =>{
    try{
        const response = await obtenerSaldo();
        navigate("")
    }catch(err){
        setError("No se pudieron cargar los datos");
    }
}

  return (
    <div className="w-[30%] flex justify-center items-center flex-col bg-[#222a33] p-6 rounded-md">
      <h2 className="text-[#fff] text-[2rem] font-bold">Saldo en Total</h2>
      {error && <p className="text-red-500">{error}</p>}
      {saldo !== null ? (
        <p className="text-green-500 font-bold text-2xl">${saldo.toLocaleString()}</p>
      ) : (
        <p>Cargando saldo...</p>
      )}
    </div>
  );
}