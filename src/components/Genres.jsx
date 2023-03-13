import React, { useContext } from 'react'
import { Context } from '../formContext/FormContext'

const Genres = () => {
    const {handleGenres, categories, resetCount} = useContext(Context)
 
    return (
        <>
            <form className='form__genres'>
                <label className='form__genres-label'> Categories: </label>
                <select className='form__genres-select' onChange={(e) => {
                    handleGenres(e.target.value)
                    resetCount()}
               }>
                    <option className='form__genres-option' value={{}}></option>
                    <option className='form__genres-option' value={categories.Animation}>Animation</option>
                    <option className='form__genres-option' value={categories.Comedy}>Comedy</option>
                    <option className='form__genres-option' value={categories.Crime}>Crime</option>
                    <option className='form__genres-option' value={categories.Documentary} >Documentary</option>
                    <option className='form__genres-option' value={categories.Drama} >Drama</option>
                    <option className='form__genres-option' value={categories.Family} >Family</option>
                    <option className='form__genres-option' value={categories.History}>History</option>
                    <option className='form__genres-option' value={categories.Music} >Music</option>
                    <option className='form__genres-option' value={categories.Mystery} >Mystery</option>
                    <option className='form__genres-option' value={categories.Romance}>Romance</option>   
                </select>
            </form>
            <div className='media__genres'>
                    <button className='form__genres-button' onClick={()=> {
                        handleGenres(categories.Animation)
                        resetCount()}}>Animation</button>
                    <button className='form__genres-button' 
                    onClick={()=> {
                        handleGenres(categories.Comedy)
                        resetCount()
                        }}>Comedy</button>
                    <button className='form__genres-button'
                     onClick={()=> {
                        handleGenres(categories.Crime)
                        resetCount()}}>Crime</button>
                    <button className='form__genres-button' 
                    onClick={()=>{
                         handleGenres(categories.Documentary)
                         resetCount()}}>Documentary</button>
                    <button className='form__genres-button' 
                    onClick={()=> {
                        handleGenres(categories.Drama)
                        resetCount()}}>Drama</button>
                    <button className='form__genres-button' 
                    onClick={()=> {
                        handleGenres(categories.Family)
                        resetCount()} }>Family</button>
                    <button className='form__genres-button' 
                    onClick={()=> {
                        handleGenres(categories.History)
                        resetCount()}}>History</button>
                    <button className='form__genres-button' 
                    onClick={()=> {
                        handleGenres(categories.Music)
                        resetCount()}}>Music</button>
                    <button className='form__genres-button' 
                    onClick={()=> {
                        handleGenres(categories.Mystery)
                        resetCount()} }>Mystery</button>
                    <button className='form__genres-button' 
                    onClick={()=> {
                        handleGenres(categories.Romance)
                        resetCount()}}>Romance</button>   
            </div>
        </>
    )
}

export default Genres