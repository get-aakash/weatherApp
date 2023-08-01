import React, { useEffect } from 'react'
import { Container } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloud } from '@fortawesome/free-solid-svg-icons';
import img1 from "../../Assets/10d.png"
import img2 from "../../Assets/09d.png"
import img3 from "../../Assets/01n.png"
import img4 from "../../Assets/sun.png"
import img5 from "../../Assets/04n.png"
import SubDisplay from '../SubDisplay/SubDisplay';

const Display = ({ value }) => {
  console.log(value.Days)
  


  
  const cloudsFunc = () => {
             
    if (value?.Days[0]?.Timeframes[0]?.wx_desc === "Sunny skies") {
        return <img className='img7 ' src={img4} />
      }
      if (value?.Days[0]?.Timeframes[0]?.wx_desc === "Patchy light drizzle") {
        return <img className='img7 ' src={img2} />
      }
      if (value?.Days[0]?.Timeframes[0]?.wx_desc === "Partly cloudy skies") {
        return <img className='img7 ' src={img5} />
      }
      if (value?.Days[0]?.Timeframes[0]?.wx_desc === "Moderate or heavy rain shower") {
        return <img className='img7 ' src={img1} />
      }
}
 return (
  <>
 
  
    <Container >
     
     <div>
      <h1 className='mt-5 text-center fw-bold  me-5 '>{value?.Days[0]?.Timeframes[0]?.wx_desc}</h1>
      <p className='mt-5 text-center fw-bold  me-5'>{value?.Days[0]?.Timeframes[0]?.date}</p>
      <div className='d-flex justify-content-center mt-5 ms-5     '>

        <p className='mt-5 me-3 fw-bold fs-5 '>{value?.Days[0]?.Timeframes[0]?.temp_c} C</p>

        <div className='circle'>{cloudsFunc()} </div>
        <div className='mt-4 ms-4'>
          <p className='fw-bold fs-5'>Humid: {value?.Days[0]?.Timeframes[0]?.humid_pct}%</p>
          <p className='fw-bold fs-5'>Wind: {value?.Days[0]?.Timeframes[0]?.windgst_kmh}km/h</p>


        </div>
      </div>
    
   
    </div>

    
    </Container>
    <div className='subdisplay gap-3'>
      {
        value.Days?.map((value,i)=>(
          <SubDisplay key={i} value = {value} />

        ))
        
      }
      
    </div>
    </>
  )
}

export default Display
