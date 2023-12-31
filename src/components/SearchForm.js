import React, {  useState } from 'react'
import { fetchData } from '../AxiosHelper/axioshelper'
import DefaultLayout from './Layout/DefaultLayout'
import { Alert, Button, Col, Container, FloatingLabel, Form, Row } from 'react-bootstrap'
import Display from './Display/Display'

const SearchForm = () => {
  const [city, setCity] = useState("")
  const [cityname, setCityName] = useState("")
  const [value, setValue] = useState([])
  const [error, setError] = useState(false)

  
  const temp=(data)=>{
    console.log(data) 
   }
  const handleOnChange = (e) => {
    const { value } = e.target
    setCity(value)

  }
  const handleOnSubmit = async (e) => {
    e.preventDefault()
    setCityName(city)
    const result = await fetchData(city)
    console.log((result))
    setValue(result.data.Days)
    if (result?.status === 200) {
      setValue(result.data)
      setError('')
    } else {
      setError(true)
    }
  }

  return (
    <DefaultLayout temp={temp}>
      <Container className='search-form  mt-3'>
        <>
          <Form onSubmit={handleOnSubmit}>
            <Row>
              <Col xs={10}>
                <Form.Control onChange={handleOnChange} className='input-field' type="string" placeholder="Search for a city !!!" />
              </Col>
              <Col>
                <Button type="submit" variant='success'>Search</Button>
              </Col>
            </Row>
          </Form>
          <div>
            {value.length !==0  && <Display temp={temp} value={value} city={cityname}/>}
          </div>
          {error && (
            <Alert variant='danger mt-3'>
              City not found. Try with correct name!!
            </Alert>
          )}

        </>
      </Container>
    </DefaultLayout>
  )
}

export default SearchForm
