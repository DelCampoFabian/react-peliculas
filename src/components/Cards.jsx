import React from 'react'
import { Link } from 'react-router-dom'
const URL__IMAGE = "https://image.tmdb.org/t/p/original"

const Cards = (props) => {
    return (
        <>
         <Link to={`/react-peliculas/movie/${props.id}`}>
            <div className='movies__container'>
               <img src={`${URL__IMAGE}${props.poster || props.backdrop}`} alt={props.title || props.name} />
               <h6 className='movies__title'>{props.title || props.name}</h6>
            </div>
         </Link>
        </>
    )
}

export default Cards