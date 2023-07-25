import axios from "axios";

export const fetchData = async(city)=>{
    const geoCoding = `https://api.opencagedata.com/geocode/v1/json?q=${city}&key=75a5c8cd1f7b40aa87740566d1bd78df`
    

    //const url = `http://api.weatherunlocked.com/api/forecast/${lat},${lng}?app_id=84e0f47c&app_key=3a51cb9f215925de7e0a8c54a3218165`
    
    try {
        const data = await axios.get(geoCoding)
        //console.log(data)
        const latdec = ((data.data.results[0].geometry.lat))
        const londec = ((data.data.results[0].geometry.lng))
        let lat = latdec?.toFixed(2)
        let lng = londec?.toFixed(2)
        const url = `http://api.weatherunlocked.com/api/forecast/${lat},${lng}?app_id=84e0f47c&app_key=3a51cb9f215925de7e0a8c54a3218165`
        const value = await axios.get(url)
        
        
        // const x = JSON.stringify(data)
        // console.log(x['results'][0]['geometry']['lat'])
        return value
    } catch (error) {
        console.log(error)
        
    }

}