import React from "react";
import '../index.css'
import { Cantidad } from "../components/Cantidad";

export function Retiro(){
    return(
        <>
            <div className="w-full h-full flex justify-center items-center bg-[#0e141b]">
                <Cantidad />
            </div>
        </>
    )
}
