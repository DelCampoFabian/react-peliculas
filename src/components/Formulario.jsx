import React, { useContext } from 'react'
import { Context } from '../formContext/FormContext'
import {FiSearch} from "react-icons/fi"

const Formulario = () => {
  const {handleSubmit} = useContext(Context)
 

  return (
    <form onSubmit={handleSubmit} className="form__search">
        <input type="text" name='search' placeholder='Search' className="form__search-input"/>
        <button type='submit' className="form__search-button"><i><FiSearch/></i></button>        
    </form> 
  )
}

export default Formulario