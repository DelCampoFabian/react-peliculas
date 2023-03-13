import React, { createContext, useState } from 'react'

export const Context = createContext()

const FormContext = ({children}) => {
    const [search, setSearch] = useState("")
    const [genres, setGenres] = useState({})
    const [count, setCount]= useState(1)

    function handleSubmit (e) {
        e.preventDefault()
        setSearch(e.target.search.value)
        setGenres({})
        e.target.reset()
    }
    const categories = {
        Animation: 16,
        Comedy: 35,
        Crime: 80,
        Documentary: 99,
        Drama: 18,
        Family: 10751,
        History: 36,
        Music: 10402,
        Mystery: 9648,
        Romance: 10749,
    }
    function handleGenres(obj) {
        setGenres(obj)
        setSearch("")
    }
    function nextCount() {
        setCount(count + 1)
    }
    function prevCount() {
        setCount(count - 1)
    }
    function resetCount() {
        setCount(1)
    }

  return (
    <Context.Provider value={{search , handleSubmit , genres, handleGenres, categories, nextCount, prevCount,resetCount, count}}>
        {children}
    </Context.Provider>
  )
}

export default FormContext