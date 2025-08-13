
function Formulario({cantidad, setCantidad, plazo, setPlazo}) {
  const calcularPrestamo=(e)=>{
    e.preventDefault();
    if([cantidad, plazo].includes(0)){
      alert("Todos los campos son obligatorios");
      return;
    }
    console.log(`Cantidad: ${cantidad}, Plazo: ${plazo}`);
    // Aquí podrías agregar la lógica para calcular el préstamo
    // Por ejemplo, enviar los datos a una API o realizar un cálculo localmente
  }
   
  return (
    <>
    {cantidad}
      <form onSubmit={calcularPrestamo}>
        <div className="column">
          <div>
            <label htmlFor="cantidad">Cantidad prestamo</label>
            <input type="number" name="cantidad" id="cantidad" placeholder='Ej: 3000' 
                onChange={(e) => setCantidad(Number(e.target.value))}
            />
          </div>
          <div>
            {plazo}
            <label htmlFor="plazo">Plazo para pagar</label>
            <select name="plazo" id="plazo"
            onChange={(e)=> setPlazo(Number(e.target.value))}>
                <option value="">Seleccionar</option>
                <option value="3">3 meses</option>
                <option value="6">6 meses</option>
                <option value="12">12 meses</option>
                <option value="24">24 meses</option>
            </select>
          </div>
        </div>
        <div className="btnSubmit">
          <input type="submit" value="Calcular" />
        </div>
      </form>
       
     </> 
  )
}

export default Formulario;