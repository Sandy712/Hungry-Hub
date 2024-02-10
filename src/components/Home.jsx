import React from 'react'
import MainSlider from './Slider/MainSlider'
import MenuView from './Products/MenuView'
  
export default function Home() {
  return (
    <div style={{ marginTop: '4rem' }}>
         
          <div className="text-right">
          <button className=' btn btn-primary'> feedback</button>
          
          </div> 


        <MainSlider/>
        <MenuView/>
        <div className="row">
    <div className="text-right">
      {/* Button aligned to the right */}
      <button className='btn btn-primary'>Feedback!</button>
    </div>
   </div> 
    </div>
  )
}
