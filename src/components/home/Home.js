import React, { useEffect, useState } from 'react'
import '../../App.css'
import search_icon from "../../assets/search.png"
import clear_icon from "../../assets/clear.png"
import cloud_icon from "../../assets/cloud.png"
import drizzle_icon from "../../assets/drizzle.png"
import rain_icon from "../../assets/rain.png"
import snow_icon from "../../assets/snow.png"
import { getAxios } from '../../Axios/axiosHelper'
import { Alert, Form } from 'react-bootstrap'
import DisplayWeather from '../display/DisplayWeather'
import { toast } from 'react-toastify'

const Home = () => {

    const [formData, setFormData] = useState("")
    const [error, setError] = useState(false)
    const [data, setData] = useState({})
    const [wicon, setWicon] = useState(cloud_icon)
    const defaultValue = "New York"
    useEffect(()=>{
        const fetch = async()=>{
            const result =  await getAxios(defaultValue)
            setData(result)
        }
        fetch()
        
        
    },[])
    const handleOnChange = (e) => {
        setFormData(e.target.value)

    }
    const handleOnSubmit = async(e) => {
        e.preventDefault()
        const value = await getAxios(formData)
        if(value?.base === "stations"){
            setData(value)
            setError("")
            if(value?.weather[0]?.icon==='01d' || value?.weather[0]?.icon==="01n" ){
                setWicon(clear_icon)
            }
            else if(value?.weather[0]?.icon==='02d' || value?.weather[0]?.icon==="02n" ){
                setWicon(cloud_icon)
            }
            else if(value?.weather[0]?.icon==='03d' || value?.weather[0]?.icon==="03n" ){
                setWicon(drizzle_icon)
            }
            else if(value?.weather[0]?.icon==='04d' || value?.weather[0]?.icon==="04n" ){
                setWicon(drizzle_icon)
            }
            else if(value?.weather[0]?.icon==='09d' || value?.weather[0]?.icon==="09n" ){
                setWicon(rain_icon)
            }
            else if(value?.weather[0]?.icon==='10d' || value?.weather[0]?.icon==="10n" ){
                setWicon(rain_icon)
            }
            else if(value?.weather[0]?.icon==='13d' || value?.weather[0]?.icon==="13n" ){
                setWicon(snow_icon)
            }
            else{
                setWicon(clear_icon)
            }
        }else{
            setError(true)
            
        }
        
    }
    return (
        <div className='container'>
            <Form onSubmit={handleOnSubmit}>
                <div className="top-bar">

                    <input type="text" className="cityInput" name='cityInput' placeholder='Search' onChange={handleOnChange} />
                    <div className="search-icon" onClick={handleOnSubmit}>
                        <img src={search_icon} alt="" />
                    </div>
                </div>
            </Form>
           
            {!error? ( <DisplayWeather wicon={wicon} data={data} />):(
        <Alert className='mt-3' variant='danger'>
          No city found. Try searching for some other city!!
        </Alert>
      )}

        </div>
    )
}

export default Home
