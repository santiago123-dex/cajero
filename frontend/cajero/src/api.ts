

export async function retirarDinero(monto: number) {
  const response = await fetch(`http://localhost:8080/api/retiros/${monto}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (!response.ok) {
    throw new Error("Error al retirar dinero");
  }
  return response.json();
}

// Consultar billetes disponibles
export async function obtenerBilletes() {
  const response = await fetch(`http://localhost:8080/billetes`);
  if (!response.ok) {
    throw new Error("Error al obtener billetes");
  }
  return response.json();
}


export async function obtenerSaldo() {
    const response = await fetch('http://localhost:8080/api/billetes/saldo', {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    });
    if (!response.ok) {
        throw new Error("Error al obtener saldo");
    }
    return response.json();

}
