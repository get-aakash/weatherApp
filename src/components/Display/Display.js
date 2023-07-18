import React from 'react'
import { Container } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloud } from '@fortawesome/free-solid-svg-icons';

const Display = ({ value }) => {
  return (
    <Container >
      
        
          <h1 className='mt-5 text-center fw-bold  me-5 '>{value?.name}</h1>

          <div className='d-flex justify-content-center mt-5 ms-5     '>
    
            <p className='mt-5 me-3 fw-bold fs-5 '>{((value?.main?.temp)-273).toFixed(0)} C</p>
    
            <div className='circle'><FontAwesomeIcon icon={faCloud} className="cloud-icon" /></div>
            <div className='mt-4 ms-4'>
              <p className='fw-bold fs-5'>Humid: {value?.main?.humidity}%</p>
              <p className='fw-bold fs-5'>Wind: {value?.wind?.speed}km/h</p>
    
    
            </div>
          </div>
         
      
      
      
    </Container>
  )
}

export default Display
