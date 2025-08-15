import { useState } from 'react'
import Header from './components/Header'
import Formulario from './components/Formulario'
import Resultado from './components/Resultado'
import Mensaje from './components/Mensaje'


import './App.css'

function App() {
   const [cantidad, setCantidad] = useState(0);
    const [plazo, setPlazo] = useState("");
    const [total, setTotal] = useState(0);
const titulo="Cotizador de prestamos...";
let componente;
if(cantidad === 0 && plazo === "") {
    componente = <Mensaje />;
}else {
  componente=<Resultado total={total} cantidad={cantidad} plazo={plazo} /> 
}
  return (
    <>
      <h1>Main Component</h1>
      <Header titulo={titulo}/>
      <div className="container">
        <Formulario cantidad={cantidad} setCantidad={setCantidad} plazo={plazo} setPlazo={setPlazo} setTotal={setTotal} />
      </div>
      <div className="mensaje">
        {componente}
      </div>
    </>
  )
}

export default App
