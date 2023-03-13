import React, { useContext } from 'react'
import { Context } from '../formContext/FormContext'

const Count = () => {
    const {count,nextCount, prevCount} = useContext(Context)

  return (
    <>
      <div className='pagination'>
          <button className='pagination__button' onClick={()=> {
            if(count > 1){
              prevCount();
            }
          }}>back</button>
          <span className='pagination__count'>{count}</span>
          <button className='pagination__button' onClick={()=> {
            if(count < 5){
              nextCount()
            }
            }}>next</button> 
      </div>
    </>
  )
}

export default Count