import React, { useState } from 'react'
import { fetchData } from '../AxiosHelper/axioshelper'

const SearchForm = async() => {
    const [value, setvalue] = useState([])
   console.log(await fetchData())
  
  return (
    <div>
      
    </div>
  )
}

export default SearchForm
