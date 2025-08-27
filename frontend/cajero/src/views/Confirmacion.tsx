import { CardConfirmacion } from "../components/CardConfirmation"



export function Confirmacion() {
    return (
        <div className="w-full h-full flex justify-center items-center bg-[#0e141b]">
            <h1 className="text-white">Confirmación</h1>
            <CardConfirmacion />
        </div>
    )
}