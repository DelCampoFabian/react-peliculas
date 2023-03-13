import React, { useContext, useEffect, useState } from 'react'
import "swiper/css";
import { Context } from '../formContext/FormContext';
import CardsMap from './CardsMap';
import PulseLoader from "react-spinners/PulseLoader"


const MoviesAndTv = ({error}) => {
    const {search , genres, count} = useContext(Context)    
    //URL API
    const API__URL = "https://api.themoviedb.org/3"
    const API__KEY = "ce3b1aef94747a8d936ecd5ff228858e"
    // State
    const [movies, setMovies] = useState([])
    const [loader, setLoader] = useState(true)
    
 
    useEffect(() => {
        const newObj = []
        const type = search ? "search" : "discover"
        const dataFetch = fetch(`${API__URL}/${type}/movie?api_key=${API__KEY}&with_genres=${genres}&page=${count}&query=${search}`)
            .then(response => response.json())
            .then(data => {
                const { results } = data
                newObj.push(...results);
                setMovies(newObj)
            })
            .finally(()=> {
                setLoader(false)
            })
    }, [count, genres, search])

    if(loader){
        return (
                 <h6 className='loading'><PulseLoader  color={"#ec2300"}/></h6>        
         )
     }
     return (
    <>
        {
            movies.length > 0 ? (
                <>
                    <h3 className='home__title'>Movies</h3>
                    <CardsMap movies={movies}/>
                </>
            )
            :
            <div className='movies__error'>{error}</div>
        }  
    </>
     )

    }

  

export default MoviesAndTv