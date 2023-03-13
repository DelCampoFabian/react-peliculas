import React from 'react'
import {AiFillStar} from "react-icons/ai"
import {MdOutlinePlayCircleFilled, MdArrowBackIos} from "react-icons/md"
import { Link } from 'react-router-dom'
import "animate.css"

const CardDetail = ({detalle, duration}) => {
    const URL__IMAGE = "https://image.tmdb.org/t/p/original"

  return (
    <section className='detail__container animate__animated animate__fadeIn animate__slow' style={{backgroundImage: `url(${URL__IMAGE + detalle.poster_path})`}}  >
        <div className='detail__text-container  animate__animated animate__fadeInLeft animate__slow'>
            <h3 className='detail__title'>{detalle.name || detalle.title}</h3>
            <p className='detail__description'>{detalle.overview}</p>
            <div className='detail__info-container'>
                <span className='detail__info'>{detalle.release_date}</span>
                <span className='detail__info-age'>{detalle.adult ? "+18" : "+13"}</span>
                <span className='detail__info'>{duration}</span>
            </div>
            <div className='detail__span-container'>
                <span className='detail__vote'>{detalle.vote_average}/10 <i>{<AiFillStar/>}</i></span>
                <span className='detail__trailer'><i>{<MdOutlinePlayCircleFilled/>}</i> View Trailer</span>
            </div>
        </div>
    
        <div className='detail__back'>
            <Link to="/react-peliculas">{<MdArrowBackIos/>}</Link>
        </div>
    </section>
  )
}

export default CardDetail