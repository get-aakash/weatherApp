import React, { useEffect } from 'react'
import { Container } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloud } from '@fortawesome/free-solid-svg-icons';
import moderateRain from "../../Assets/10d.png"
import patchyLightDrizzle from "../../Assets/09d.png"
import img3 from "../../Assets/01n.png"
import sunnySkies from "../../Assets/sun.png"
import partlyCloudySkies from "../../Assets/04n.png"
import img6 from "../../Assets/09d.png"
import clearSkies from "../../Assets/clearSky.png"
import overcastSkies from "../../Assets/overcast.png"
import mist from "../../Assets/mist.png"
import fog from "../../Assets/fog.png"
import img9 from "../../Assets/overcast.png"
import SubDisplay from '../SubDisplay/SubDisplay';

const Display = ({ value, city,temp }) => {
  
  
  console.log(temp())
  var x = temp()
  const cloudsFunc = () => {
    
    if (value?.Days[0]?.Timeframes[0]?.wx_desc === "Sunny skies") {
      return <img className='img4 ' src={sunnySkies} />
    }
    if (value?.Days[0]?.Timeframes[0]?.wx_desc === "Patchy light drizzle") {
      return <img className='img4 ' src={patchyLightDrizzle} />
    }
    if (value?.Days[0]?.Timeframes[0]?.wx_desc === "Patchy light rain") {
      return <img className='img4 ' src={patchyLightDrizzle} />
    }
    if (value?.Days[0]?.Timeframes[0]?.wx_desc === "Patchy rain possible") {
      return <img className='img4 ' src={patchyLightDrizzle} />
    }
    if (value?.Days[0]?.Timeframes[0]?.wx_desc === "Partly cloudy skies") {
      return <img className='img4 ' src={partlyCloudySkies} />
    }
    if (value?.Days[0]?.Timeframes[0]?.wx_desc === "Cloudy skies") {
      return <img className='img4 ' src={partlyCloudySkies} />
    }
    if (value?.Days[0]?.Timeframes[0]?.wx_desc === "Moderate or heavy rain shower") {
      return <img className='img4 ' src={moderateRain} />
    }
    if (value?.Days[0]?.Timeframes[0]?.wx_desc === "Light rain shower") {
      return <img className='img4 ' src={img6} />
    }
    if (value?.Days[0]?.Timeframes[0]?.wx_desc === "Light rain") {
      return <img className='img4 ' src={img6} />
    }
    if (value?.Days[0]?.Timeframes[0]?.wx_desc === "Light drizzle") {
      return <img className='img4 ' src={img6} />
    }
    if (value?.Days[0]?.Timeframes[0]?.wx_desc === "Moderate rain") {
      return <img className='img4 ' src={moderateRain} />
    }
    if (value?.Days[0]?.Timeframes[0]?.wx_desc === "Clear skies") {
      return <img className='img4 ' src={clearSkies} />
    }
    if (value?.Days[0]?.Timeframes[0]?.wx_desc === "Overcast skies") {
      return <img className='img4 ' src={overcastSkies} />
    }
    if (value?.Days[0]?.Timeframes[0]?.wx_desc === "Mist") {
      return <img className='img4 ' src={mist} />
    }
    if (value?.Days[0]?.Timeframes[0]?.wx_desc === "Fog") {
      return <img className='img4 ' src={fog} />
    }
  
    
             
    
}
 return (
  <>
 
  
    <Container >
     
     <div>
     <h1 className='mt-5 text-center fw-bold  me-5 '>{city.charAt(0).toUpperCase() + city.slice(1)}</h1>
      <h5 className='mt-5 text-center fw-bold  me-5 '>{value?.Days[0]?.Timeframes[0]?.wx_desc}</h5>
      <p className='mt-5 text-center fw-bold  me-5'>{value?.Days[0]?.Timeframes[0]?.date}</p>
      <div className='d-flex justify-content-center mt-5 ms-5     '>

        <p className='mt-5 me-3 fw-bold fs-5 '>{x==="celsius"?(value?.Days[0]?.Timeframes[0]?.temp_c):(value?.Days[0]?.Timeframes[0]?.temp_f)}</p>

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
