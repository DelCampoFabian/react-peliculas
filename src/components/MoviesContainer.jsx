import React from 'react'
import Count from './Count'
import Genres from './Genres'
import Header from './Header'
import MoviesAndTv from './MoviesAndTv'
import NavBar from './NavBar'


const MoviesContainer = () => {
  return (
    <>
    <Header/>
    <main className='media__main'>
        <div  className='media__container'>
            <Genres/>
        </div>
        <div id="mediaContainer" className='media__movie-container'>
            <MoviesAndTv error="No se han encontrado resultados"/>
            <Count/>  
        </div>
    </main>
    </>
  )
}

export default MoviesContainer