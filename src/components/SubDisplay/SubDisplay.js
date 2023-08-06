import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
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

const SubDisplay = ({ value }) => {
  
    const cloudsFunc = () => {
             
        if (value?.Timeframes[0]?.wx_desc === "Sunny skies") {
            return <img className='img4 ' src={sunnySkies} />
          }
          if (value?.Timeframes[0]?.wx_desc === "Patchy light drizzle") {
            return <img className='img4 ' src={patchyLightDrizzle} />
          }
          if (value?.Timeframes[0]?.wx_desc === "Patchy light rain") {
            return <img className='img4 ' src={patchyLightDrizzle} />
          }
          if (value?.Timeframes[0]?.wx_desc === "Patchy rain possible") {
            return <img className='img4 ' src={patchyLightDrizzle} />
          }
          if (value?.Timeframes[0]?.wx_desc === "Partly cloudy skies") {
            return <img className='img4 ' src={partlyCloudySkies} />
          }
          if (value?.Timeframes[0]?.wx_desc === "Cloudy skies") {
            return <img className='img4 ' src={partlyCloudySkies} />
          }
          if (value?.Timeframes[0]?.wx_desc === "Moderate or heavy rain shower") {
            return <img className='img4 ' src={moderateRain} />
          }
          if (value?.Timeframes[0]?.wx_desc === "Light rain shower") {
            return <img className='img4 ' src={img6} />
          }
          if (value?.Timeframes[0]?.wx_desc === "Light rain") {
            return <img className='img4 ' src={img6} />
          }
          if (value?.Timeframes[0]?.wx_desc === "Light drizzle") {
            return <img className='img4 ' src={img6} />
          }
          if (value?.Timeframes[0]?.wx_desc === "Moderate rain") {
            return <img className='img4 ' src={moderateRain} />
          }
          if (value?.Timeframes[0]?.wx_desc === "Clear skies") {
            return <img className='img4 ' src={clearSkies} />
          }
          if (value?.Timeframes[0]?.wx_desc === "Overcast skies") {
            return <img className='img4 ' src={overcastSkies} />
          }
          if (value?.Timeframes[0]?.wx_desc === "Mist") {
            return <img className='img4 ' src={mist} />
          }
          if (value?.Timeframes[0]?.wx_desc === "Fog") {
            return <img className='img4 ' src={fog} />
          }
    }
    return (
        <Container className='' >
<div>
{/* <p className='mt-4 text-center fw-bold  me-5 '>{value?.Timeframes[0].wx_desc}</p> */}
            <p className='mt-5 text-center fw-bold  me-5'>{value?.date}</p>
            <p className='mt-4  fw-bold fs-5  '>{value?.Timeframes[0].temp_c}&deg;C</p>
            <div className='circle1'>{cloudsFunc() } </div>
            
            <div className='d-flex justify-content-center mt-5 ms-5     '>

                

                
                <div className='mt-4 ms-4'>
                    {/* <p className='fw-bold fs-5'>Humid: {value?.humid_max_pct
                    }%</p> */}
                    {/* <p className='fw-bold fs-5'>Wind: {value?.windspd_max_kmh
                    }km/h</p> */}


                </div>
            </div>
</div>
            


        </Container>
    )
}

export default SubDisplay
