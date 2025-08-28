import { Link, useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { retirarDinero } from "../api";
import { useState } from "react";

export function CardConfirmacion() {
    const location = useLocation();
    const navigate = useNavigate();
    const monto = location.state?.monto;
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleConfirmar = async () => {
        setLoading(true);
        setError("");
        try {
            const response = await retirarDinero(monto);
            navigate("/detalle", { state: { ...response, monto } });
        } catch (err) {
            setError("No se pudo realizar el retiro. Intenta de nuevo.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="w-[30%] flex justify-center items-center flex-col bg-[#181e25] p-5 rounded-md">
            <h3 className="text-white text-3xl font-bold my-1.5">Confimar Transacción</h3>
            <p className="text-[#b4b4b4]">Por favor confirme los detalles de su retiro</p>
            <div className="w-[80%] flex border border-[#b4b4b4] rounded-md p-4 mt-6 justify-between flex-col gap-3">
                <div className="flex justify-between text-white font-bold">
                    <span className="font-bold text-[#b4b4b4]">Tipo:</span>
                    <span>Retiro</span>
                </div>
                <div className="flex justify-between text-white font-bold">
                    <span className="font-bold text-[#b4b4b4]">Monto:</span>
                    <span>{monto ? `$${monto.toLocaleString()}` : '-'}</span>
                </div>
                <div className="flex justify-between text-white font-bold">
                    <span className="font-bold text-[#b4b4b4]">Comision:</span>
                    <span>$0.00</span>
                </div>
                <hr className="border-[#b4b4b4]" />
                <div className="flex justify-between text-white font-bold">
                    <span className="font-bold text-[#b4b4b4]">Total:</span>
                    <span>{monto ? `$${monto.toLocaleString()}` : '-'}</span>
                </div>
                {error && <div className="text-red-500 text-center">{error}</div>}
                <div className="flex w-full justify-between">
                    <Link to="/cantidad" className="w-[40%] bg-[#202c3a] cursor-pointer hover:bg-[#0e141b] p-2 rounded-sm text-center"><button className="text-white font-bold">Volver</button></Link>
                    <button
                        onClick={handleConfirmar}
                        className="w-[40%] bg-[#16a249] p-2 rounded-sm text-center cursor-pointer hover:bg-[#158b40] text-white font-bold"
                        disabled={loading}
                    >
                        {loading ? "Procesando..." : "Confirmar"}
                    </button>
                </div>
            </div>
        </div>
    );
}