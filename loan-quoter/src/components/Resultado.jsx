import React from 'react'

const Resultado = ({total,plazo,cantidad}) => {
    console.log(`Total: ${total}, Plazo: ${plazo}, Cantidad: ${cantidad}`);
  return (
    <div>
      <h2>Cotizacion</h2>
      <p>La cantidad solicitada es: {cantidad}</p>
      <p>El plazo seleccionado es: {plazo} meses</p>
      <p>Su pago mensual es de: {(total/plazo).toFixed(2)}</p>
      <p>El total a pagar es: {total.toFixed(2)}</p>
    </div>
  )
}

export default Resultado