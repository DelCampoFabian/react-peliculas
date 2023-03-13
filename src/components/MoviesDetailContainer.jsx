import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import CardDetail from './CardDetail'

const MoviesDetailContainer = () => {
    const [detalle, setDetalle] = useState()
    const {detalleMovies} = useParams()
    const API__URL = "https://api.themoviedb.org/3"
    const API__KEY = "ce3b1aef94747a8d936ecd5ff228858e"
    let hora = Math.round(Math.random()) + 1
    let minutos = Math.ceil(Math.random() * 60) 
    let duration = `${hora}h ${minutos}min`
   
    let asd = "https://api.themoviedb.org/3/movie/646389?api_key=ce3b1aef94747a8d936ecd5ff228858e"
    useEffect(()=>{
        let newObj = {}
        const dataFetch = fetch(`${API__URL}/movie/${detalleMovies}?api_key=${API__KEY}`)
            .then(response => response.json())
            .then(data => {
                newObj= {...data}
                setDetalle(newObj)
            })
    },[detalleMovies])
    

  return (
    <>
    {
        detalle && 
        <>
            <CardDetail detalle={detalle} duration={duration}/>
        </>
    }
    </>
    
  )
}

export default MoviesDetailContainer