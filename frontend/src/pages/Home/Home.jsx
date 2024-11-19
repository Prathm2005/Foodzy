import React, { useState } from 'react'
// import './Home.css'
import Header from '../../components/Header/Header'
import Menu from '../../components/Menu/Menu'
import Fooddisplay from '../../components/Fooddisplay/Fooddisplay'

const Home = () => {
  const [category,setCategory]=useState("All")
  return (
    <>
    
    <Header/>
    <Menu category={category} setCategory={setCategory}/>
    <Fooddisplay category={category}/>
   
    </>
  )
}

export default Home