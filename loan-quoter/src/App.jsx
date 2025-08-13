import { useState } from 'react'
import Header from './components/Header'
import Formulario from './components/Formulario'


import './App.css'

function App() {
   const [cantidad, setCantidad] = useState(0);
    const [plazo, setPlazo] = useState("");
const titulo="Cotizador de prestamos...";
  return (
    <>
      <h1>Main Component</h1>
      <Header titulo={titulo}/>
      <div className="container">
        <Formulario cantidad={cantidad} setCantidad={setCantidad} plazo={plazo} setPlazo={setPlazo} />
      </div>
      
    </>
  )
}

export default App
