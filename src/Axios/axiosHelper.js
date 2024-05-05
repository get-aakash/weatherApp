

let api_key = "68ee6aa7a509b956382fa8853b7507e0"

export const getAxios = async(data)=>{
    if(data === ""){
        return
    }
    
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${data}&units=Metric&appid=${api_key}`
    let response    = await fetch(url)
    let value = await response.json()
    return value
}