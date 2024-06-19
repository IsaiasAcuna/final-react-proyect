import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../component/Navbar'
import Cards from '../component/Cards'

const Home = () => {
  return (
    <main className="container">
    <Navbar/>
        <h1 className="text-center text-danger m-5">Posters de Duki</h1>
        <div className="d-flex justify-content-around">
            <Cards/>
            <Cards/>
        </div>
    </main>
  )
}

export default Home