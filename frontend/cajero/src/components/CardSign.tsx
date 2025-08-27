import React from "react";
import { Link } from "react-router-dom";
import '../index.css'


function CardSign(){
    return(
        <>
            <div className="w-[30%] flex justify-center items-center flex-col bg-[#222a33] p-6 rounded-md">
                <svg xmlns="http://www.w3.org/2000/svg" width="300" height="100" viewBox="0 0 24 24" fill="none" stroke="#48f" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-credit-card-icon lucide-credit-card"><rect width="20" height="14" x="2" y="5" rx="2"/><line x1="2" x2="22" y1="10" y2="10"/></svg>
                <h2 className="text-[#fff] text-[2rem] font-bold">Cajero Automatico</h2>
                <p className="text-[#b4b4b4]">Seleccione la opcion para continuar</p>
                <Link to="/cantidad" className="py-4 px-22 bg-[#48f] rounded-sm mt-6 text-white text-xl text-center cursor-pointer hover:bg-[#36c] duration-300"><button><span>$</span>Retirar dinero</button></Link>
                <button className="py-4 px-20 bg-[#0e141b] opacity-[0.5] rounded-sm mt-6 text-white text-xl cursor-pointer hover:opacity-[0.3]"><span>$</span> Consultar Saldo</button>
                <Link to="/administracion" className="py-4 px-22 bg-[#48f] rounded-sm mt-6 text-white text-xl text-center cursor-pointer hover:bg-[#36c] duration-300">Administración</Link>
            </div>
        </>
    )
}

export default CardSign