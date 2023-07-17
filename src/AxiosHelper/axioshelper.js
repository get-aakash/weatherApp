import axios from "axios";

export const fetchData = async(city)=>{
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=68ee6aa7a509b956382fa8853b7507e0`
    try {
        const {data} = await axios.get(url)
        return data
    } catch (error) {
        console.log(error)
        
    }

}