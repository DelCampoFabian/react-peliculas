import React from 'react'
import {BsFillPlayFill} from "react-icons/bs"
import "animate.css"

const HeaderStyle = ({selectedImage}) => {
  return (
    <div className='header__info-container animate__animated animate__fadeInLeft'>
          <h1 className='header__title'>{selectedImage.name}</h1>
          <div className='header__info'>
            <span>{selectedImage.fecha}</span>
            <span>{selectedImage.edad}</span>
            <span>{selectedImage.duration}</span>
          </div>
          <p className='header__description'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem accusamus ratione perferendis repellat assumenda asperiores  eius ex! Assumenda, possimus. Inventore explicabo quas magni aut labore laudantium quidem harum id. Odio?
          </p>
          <div className='header__buttons-container'>
            <span className='header__buttons'><i><BsFillPlayFill/></i> Play now</span>
            <span className='header__buttons'> + My List</span>
          </div>
    </div>
  )
}

export default HeaderStyle