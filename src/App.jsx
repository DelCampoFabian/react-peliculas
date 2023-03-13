import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import FormContext from './formContext/FormContext';
import MoviesContainer from './components/MoviesContainer';
import MoviesDetailContainer from './components/MoviesDetailContainer';


function App() {

  return (
    <>
        <BrowserRouter>
            <FormContext>
                  <Routes>
                        <Route path='/react-peliculas' element={<MoviesContainer/>}/>
                        <Route path='/react-peliculas/movie/:detalleMovies' element={<MoviesDetailContainer/>}/>
                  </Routes>
            </FormContext>
      </BrowserRouter>        
    </>
  )
}

export default App
