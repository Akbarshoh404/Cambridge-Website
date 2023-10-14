import React from 'react'
import Navbar from "../../Layoutes/Navbar/Navbar"
import Header from "./Header"
import "./home.scss"
import Section1 from "../Home/Section1"
import Section2 from "../Home/Section2"
import Footer from "../../Layoutes/Footer/Footer"
import Section3 from './Section3'

const Home = () => {
  return (
    <>
        <Navbar/>
        <Header/>
        <Section1/>
        <Section2/>
        <Section3/>
        <Footer/>
    </>
  )
}

export default Home