import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import img1 from "../../Assets/10d.png"
import img2 from "../../Assets/09d.png"
import img3 from "../../Assets/01n.png"
import img4 from "../../Assets/sun.png"
import img5 from "../../Assets/04n.png"
import img6 from "../../Assets/09d.png"
import img8 from "../../Assets/moderaterain.png"

const SubDisplay = ({ value }) => {
    const cloudsFunc = () => {
             
        if (value?.Timeframes[0]?.wx_desc === "Sunny skies") {
            return <img className='img4 ' src={img4} />
          }
          if (value?.Timeframes[0]?.wx_desc === "Patchy light drizzle") {
            return <img className='img4 ' src={img2} />
          }
          if (value?.Timeframes[0]?.wx_desc === "Partly cloudy skies") {
            return <img className='img4 ' src={img5} />
          }
          if (value?.Timeframes[0]?.wx_desc === "Cloudy skies") {
            return <img className='img4 ' src={img5} />
          }
          if (value?.Timeframes[0]?.wx_desc === "Moderate or heavy rain shower") {
            return <img className='img4 ' src={img1} />
          }
          if (value?.Timeframes[0]?.wx_desc === "Light rain shower") {
            return <img className='img4 ' src={img6} />
          }
          if (value?.Timeframes[0]?.wx_desc === "Moderate rain") {
            return <img className='img4 ' src={img8} />
          }
          
    }
    return (
        <Container className='' >
<div>
{/* <p className='mt-4 text-center fw-bold  me-5 '>{value?.Timeframes[0].wx_desc}</p> */}
            <p className='mt-5 text-center fw-bold  me-5'>{value?.date}</p>
            <div className='circle1'>{cloudsFunc() } </div>
            <div className='d-flex justify-content-center mt-5 ms-5     '>

                {/* <p className='mt-5 me-3 fw-bold fs-5 '>{value?.Timeframes[0].temp_c} C</p> */}

                
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
