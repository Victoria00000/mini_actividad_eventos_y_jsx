import './App.css';
import flor from './img/rose2.jpg';
import vaquita from "./img/vaquita.jpg";
import { useRef } from "react";
// Ejercicios de eventos, casi sin variables a propósito!!!
function App() {
  //Hook de referencia, useRef(), suplanta los getElements.
  const refCaja = useRef();
  const moneda = 23.19;

  const incrementar = (evt) => {
    evt.target.innerHTML = Number(evt.target.innerHTML) + 1;
    evt.target.style.backgroundColor = 'rgb(127, 229, 255)';
    if (Number(evt.target.innerHTML) >= 10) { evt.target.innerHTML = 1 };
    if (Number(evt.target.innerHTML) > 5) { evt.target.style.backgroundColor = 'rgb(202, 97, 97)' };
  };
  const convertir = () => refCaja.current.innerHTML = Number(refCaja.current.innerHTML) * moneda;
  const leer = (evt) => refCaja.current.innerHTML = evt.target.value;
  //const intercambio = (evt) => evt.target.src = vaquita; //se puede
  //const intercambio = (evt) => evt.target.src = flor ? evt.target.src = vaquita : evt.target.src = flor; //no se puede
  const intercambio = (evt) => evt.target.src.includes('rose') ? evt.target.src = vaquita : evt.target.src = flor;

  return (
    <>
      <h4> Eventos, inicial </h4>
      <div className='caja' ref={refCaja} onClick={incrementar}> 1 </div>
      <button className='button' onClick={convertir}> - Convertir - </button>
      <div><img src={flor} alt='florImg' title='flor' onClick={intercambio} /></div>
      <input className='campo' type='text' onChange={leer} />
    </>
  );
}

export default App;
