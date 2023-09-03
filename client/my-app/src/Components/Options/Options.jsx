import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Style from "./Options.module.css"
import { orderDogs,getFilteredBreeds } from '../../Redux/Actions'

function Options(props) {
    const temperaments=useSelector(state=>state.temperaments)
    const dispach=useDispatch()

    const handerlChangeFilter=(e=>{
        const{value}=e.target
        dispach(getFilteredBreeds(value))
    })
    const handerlChangeOrder=(e=>{
        const {value}=e.target
        dispach(orderDogs(value,props.breeds))
    })

  return (
    <div className={Style.orderContainer}>
      <div>
        <label htmlFor="filtrar">Filtrar por temperamento: </label>
        <select  id="filtrar" onChange={handerlChangeFilter}>
            <option value="">ALL</option>
            {temperaments.map((e,index)=><option key={index} value={e}>{e}</option>)}
        </select>
      </div>
      <div>
        <label htmlFor="ordenar">Ordenar :</label>
        <select id="ordenar" onChange={handerlChangeOrder}>
        <optgroup label='Nombre'>
            <option value="name_asc">A-Z</option>
            <option value="name_desc">Z-A</option>
        </optgroup>
        <optgroup label='Peso'>
            <option value="weight_asc">MIN-PESO</option>
            <option value="weight_desc">MAX-PESO</option>
        </optgroup>
        </select>
      </div>
    </div>
  )
}

export default Options
