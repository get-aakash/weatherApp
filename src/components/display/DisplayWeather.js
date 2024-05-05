import React from 'react'

import humidity_icon from "../../assets/humidity.png"

import wind_icon from "../../assets/wind.png"

const DisplayWeather = ({wicon, data}) => {
  return (
    <div>
      <div className="weather-image">
                <img src={wicon} alt="" />
            </div>
            <div className="weather-temp">{Math.floor(data?.main?.temp)} °C</div>
            <div className="weather-location">{data?.name}</div>
            <div className="data-container">
                <div className="element">
                    <img src={humidity_icon} alt="" className='icon' />
                    <div className="data">
                        <div className="humidity-percentage">{data?.main?.humidity} %</div>
                        <div className="text">Humidity</div>
                    </div>
                </div>
                <div className="element">
                    <img src={wind_icon} alt="" className='icon' />
                    <div className="data">
                        <div className="humidity-percentage">{Math.floor(data?.wind?.speed)} km/h</div>
                        <div className="text">Wind Speed</div>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default DisplayWeather
