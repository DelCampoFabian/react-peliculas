import React, {useState, useEffect} from 'react'
import NavBar from './NavBar'
import "animate.css"
import { headerInfo } from '../utils/header-info'
import HeaderStyle from './HeaderStyle'

const Header = () => {
  const movies = headerInfo;
  const autoPlay = true
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState(movies[0]);
  const [loaded, setLoaded] = useState(false);
  function handleLoad() {
    setLoaded(true)
  }
  useEffect(()=> {
    if (autoPlay){
      const interval = setInterval(()=> {
      selectNewImage(selectedIndex, movies)
      },15000)
      return () => clearInterval(interval)
    }
  })

  const selectNewImage = (index, movies, next = true) => {
    setLoaded(false);
    setTimeout(() => {
      const condition = next ? selectedIndex < movies.length - 1 : selectedIndex > 0;
      const nextIndex = next ? (condition ? selectedIndex + 1 : 0) : condition ? selectedIndex - 1 : movies.length - 1;
      setSelectedImage(movies[nextIndex]);
      setSelectedIndex(nextIndex);
    }, 1000);
  };

  return (
    <header className='header animate__animated animate__fadeIn animate__slower' style={{backgroundImage: `url(${selectedImage.image})`}}>
        <NavBar/>
        <HeaderStyle selectedImage={selectedImage}/>
    </header>
  )
}

export default Header