import axios from "axios";

export const fetchData = async(city)=>{
    const url = `http://api.weatherunlocked.com/api/forecast/london?app_id=84e0f47c&app_key=3a51cb9f215925de7e0a8c54a3218165`
    
    try {
        const data = await axios.get(url)
        return data
    } catch (error) {
        console.log(error)
        
    }

}