import Announcement from '../components/Announcement'
import React from 'react'
import Navbar from '../components/Navbar'

const Home = () => {
  return (
    <div className='container'>
        <Announcement/>
        <Navbar/>
    </div>
  )
}

export default Home