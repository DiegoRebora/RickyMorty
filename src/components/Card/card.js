import './card.css'
import InfoCard from '../InfoCard/infoCard'
import { useState } from 'react'

export default function Card({nombre, imagen, status, genero, origen, especie }) {
    const [show, setShow] = useState(false)


    return(


        <div className="card m-2 p-2 d-flex flex-row justify-content-between align-items-center">
          <div className="d-flex flex-column justify-content-between align-items-center">
            <img src={imagen} alt="imagen-personaje..."/>
            <h2 className="size-name text-center">{nombre}</h2>
            <button  onClick={()=> setShow(true)} className={show?"btn btn-active align-self-end more d-none":"btn btn-active align-self-end more d-block"}>Learn More</button>
          </div>
          <div>        
           {show? <InfoCard status={status} genero={genero} origen={origen} especie={especie} setShow={setShow} /> : ''}
         </div>
      </div>

    )
}