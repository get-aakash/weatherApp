import React, { Children } from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

const DefaultLayout = ({children, temp}) => {
  return (
    <div>
        <Header temp={temp}/>
        <div className='main'>{children}</div>
        <Footer />

      
    </div>
  )
}

export default DefaultLayout
