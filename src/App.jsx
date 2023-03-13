import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
//import NavBar from './components/NavBar';
import FormContext from './formContext/FormContext';
import MoviesContainer from './components/MoviesContainer';
import MoviesDetailContainer from './components/MoviesDetailContainer';


function App() {

  return (
    <>
      <BrowserRouter>
      <FormContext>
        <Routes>
              <Route path='/' element={<MoviesContainer/>}/>
              <Route path='/movies' element={<MoviesContainer/>}/>
              <Route path='/movie/:detalleMovies' element={<MoviesDetailContainer/>}/>
        </Routes>
      </FormContext>
    </BrowserRouter>        
    </>
  )
}

export default App
