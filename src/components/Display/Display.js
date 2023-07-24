import React from 'react'
import { Container } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloud } from '@fortawesome/free-solid-svg-icons';
import img1 from "../../Assets/10d.png"
import img2 from "../../Assets/09d.png"
import img3 from "../../Assets/01n.png"
const Display = ({ value }) => {
  console.log((value))
  const tempConversion = ()=>{
    return ((value?.main?.temp) - 273).toFixed(0)

  }
  const cloudsFunc = ()=>{
    if(value?.clouds?.all>=75 && value?.clouds?.all){
      return <img className='img1' src={img1} />
    }
    if(value?.clouds?.all>=50 && value?.clouds?.all<75 && value?.clouds?.all ){
      return <img className='img1' src={img2} />
    }
    if(value?.clouds?.all<50 && value?.clouds?.all ){
      return <img className='img1' src={img3} />
    }
  }


  return (
    <Container >
      <h1 className='mt-5 text-center fw-bold  me-5 '>{value?.name}</h1>

      <div className='d-flex justify-content-center mt-5 ms-5     '>

        <p className='mt-5 me-3 fw-bold fs-5 '>{tempConversion()} C</p>

        <div className='circle'>{cloudsFunc()} </div>
        <div className='mt-4 ms-4'>
          <p className='fw-bold fs-5'>Humid: {value?.main?.humidity}%</p>
          <p className='fw-bold fs-5'>Wind: {value?.wind?.speed}km/h</p>


        </div>
      </div>




    </Container>
  )
}

export default Display
