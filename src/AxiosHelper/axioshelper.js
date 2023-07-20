import axios from "axios";

export const fetchData = async(city)=>{
    const url = `https://api.weatherapi.com/v1/forecast.json?key=6738a773609f4890978132229232007&q=${city}&days=7`
    try {
        const {data} = await axios.get(url)
        return data
    } catch (error) {
        console.log(error)
        
    }

}