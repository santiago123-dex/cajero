import { Link } from "react-router-dom"

export function Cantidad() {
    return (
        <div className="w-[30%] flex justify-center items-center flex-col bg-[#181e25] p-5 rounded-md">
            <h3 className="text-white">Seleccionar el Monto</h3>
            <p className="text-[#b4b4b4]">Elija una cantidad o ingrese un monto personalizado</p>

            <div className="w-full flex justify-center items-center mt-6 gap-5">
                <Link to="/confirmacion" className="w-[40%] bg-[#202c3a] text-white p-4 rounded-sm text-center cursor-pointer hover:bg-[#0e141b]"><div><span>$</span>20</div></Link>
                <Link to="/confirmacion" className="w-[40%] bg-[#202c3a] text-white p-4 rounded-sm text-center cursor-pointer hover:bg-[#0e141b]"><div><span>$</span>40</div></Link>
            </div>

             <div className="w-full flex justify-center items-center mt-4 gap-6">
                <Link to="/confirmacion" className="w-[40%] bg-[#202c3a] text-white p-4 rounded-sm text-center cursor-pointer hover:bg-[#0e141b]"><div><span>$</span>20</div></Link>
                <Link to="/confirmacion" className="w-[40%] bg-[#202c3a] text-white p-4 rounded-sm text-center cursor-pointer hover:bg-[#0e141b]"><div><span>$</span>40</div></Link>
            </div>

             <div className="w-full flex justify-center items-center mt-4 gap-6">
                <Link to="/confirmacion" className="w-[40%] bg-[#202c3a] text-white p-4 rounded-sm text-center cursor-pointer hover:bg-[#0e141b]"><div><span>$</span>20</div></Link>
                <Link to="/confirmacion" className="w-[40%] bg-[#202c3a] text-white p-4 rounded-sm text-center cursor-pointer hover:bg-[#0e141b]"><div><span>$</span>40</div></Link>
            </div>
           
            <div className="w-[86%] flex justify-center items-center mt-4 gap-5  flex-col">
                <Link to="/" className="w-full bg-[#202c3a] text-white p-2 rounded-sm cursor-pointer hover:bg-[#0e141b]"><button className="w-full bg-[#202c3a] text-white p-2 rounded-sm cursor-pointer hover:bg-[#0e141b]">Volver</button></Link>
            </div>
        </div>
    )
}