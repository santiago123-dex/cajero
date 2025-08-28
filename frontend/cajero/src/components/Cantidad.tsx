import { Link } from "react-router-dom"

export function Cantidad() {

    const montos: number[] = [20000, 40000, 60000, 80000, 100000, 120000];

    return (
        <div className="w-[30%] flex justify-center items-center flex-col bg-[#181e25] p-5 rounded-md">
            <h3 className="text-white text-3xl font-bold my-1.5">Seleccionar el Monto</h3>
            <p className="text-[#b4b4b4]">Elija una cantidad o ingrese un monto personalizado</p>


            <div className="w-full grid grid-cols-2 gap-5 mt-6">
                {montos.map((monto) => (
                    <Link
                        key={monto}
                        to="/confirmacion"
                        state={{monto}}
                        className="flex bg-[#202c3a] font-bold text-white p-4 rounded-sm text-center cursor-pointer hover:bg-[#0e141b] justify-center">
                        <div><span>$</span>{monto.toLocaleString()}</div>
                    </Link>
                ))}
            </div>

            <div className="w-[100%] flex justify-center items-center mt-4 gap-5  flex-col">
                <Link to="/" className="w-full bg-[#202c3a] text-white p-2 rounded-sm cursor-pointer hover:bg-[#0e141b]"><button className="w-full bg-[#202c3a] text-white p-2 rounded-sm cursor-pointer hover:bg-[#0e141b]">Volver</button></Link>
            </div>

        </div>
    )
}