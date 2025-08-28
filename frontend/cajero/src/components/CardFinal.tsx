import { useLocation, useNavigate } from "react-router-dom"

export function CardFinal() {

    const location = useLocation();
    const navigate = useNavigate();
    const monto = location.state?.monto;

    const date = new Date();
    const fecha = date.toLocaleDateString();
    const hora = date.toLocaleTimeString();

    //formateador del monto
    const formatoMonto = (valor: number) =>
        valor ? `$${valor.toLocaleString()}` : '-';

    //Estado de la transaccion
    const estado = "Exitoso";
    const tipo = "Retiro";

    const billetes = location.state ? Object.entries(location.state).filter(([key, value]) => !isNaN(Number(key))) : [];

    //Crear una Nueva transaccion
    const nuevaTransaccion = () => navigate("/");

    return (
            <div className="w-full max-w-md overflow-auto">
                <div className="bg-[#181e25] p-5 text-center rounded-sm">
                    <div className="flex justify-center mb-6">
                        <div className="w-20 h-20 flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="800" height="300" viewBox="0 0 24 24" fill="none" stroke="#43d067" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-circle-check-icon lucide-circle-check"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>
                        </div>
                    </div>

                    <h1 className="text-2xl font-bold text-green-400 mb-2">
                        ¡Transacción Exitosa!
                    </h1>

                    <p className="text-slate-300 mb-8">
                        Su retiro ha sido procesado correctamente
                    </p>

                    <div className="bg-slate-700 rounded-xl p-6 mb-8 border border-slate-600">
                        <h2 className="text-xl font-semibold text-white mb-6 text-left">
                            Recibo de Transacción
                        </h2>

                        <div className="space-y-4">
                            <div className="flex justify-between items-center">
                                <span className="text-slate-400">Fecha:</span>
                                <span className="text-white font-medium">{fecha}</span>
                            </div>

                            <div className="flex justify-between items-center">
                                <span className="text-slate-400">Hora:</span>
                                <span className="text-white font-medium">{hora}</span>
                            </div>

                            <div className="flex justify-between items-center">
                                <span className="text-slate-400">Tipo:</span>
                                <span className="text-white font-medium">{tipo}</span>
                            </div>

                            <div className="flex justify-between items-center">
                                <span className="text-slate-400">Monto:</span>
                                <span className="text-green-400 font-bold text-lg">
                                    {formatoMonto(monto)}
                                </span>
                            </div>
                            {/* Billetes que se tienen que entregar*/}
                            {billetes.length > 0 && (
                                <div className="mt-4">
                                    <span className="text-slate-400 block mb-2">Billetes entregados:</span>
                                    <ul className="text-white text-left pl-4">
                                        {billetes.map(([denom, disponibles]) => (
                                            <li key={String(denom)} className="text-center">
                                                {String(disponibles)} x ${String(denom)}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            <div className="flex justify-between items-center">
                                <span className="text-slate-400">Estado:</span>
                                <span className="text-green-400 font-medium">{estado}</span>
                            </div>
                        </div>
                    </div>

                    <p className="text-orange-400 mb-6 text-sm">
                        Por favor retire su dinero y tarjeta
                    </p>

                    {/*Boton que ejecuta la nueva transaccion*/}
                    <button
                        onClick={nuevaTransaccion}
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-6 rounded-xl transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-800"
                    >
                        Nueva Transacción
                    </button>
                </div>
            </div>

    )
}