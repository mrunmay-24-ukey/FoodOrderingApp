import React from 'react'
import Navbar from '../components/Navbar'
import Categorymenu from '../components/Categorymenu'
import FoodItem from '../components/FoodItem'
import Cart from '../components/Cart'

const Home = () => {
  return (
    <>
        <Navbar/>
        <Categorymenu/>
        <FoodItem/>
        <Cart/>
    </>
  )
}

export default Home