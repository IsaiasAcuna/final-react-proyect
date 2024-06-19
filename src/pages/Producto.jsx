import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../component/Navbar'
import Cards from '../component/Cards'

const Producto = () => {
  return (
    <main className="container">
    <Navbar/>   
        <h1 className="text-center text-primary m-5">Productos</h1>
        <div className="d-flex justify-content-around">
            <Cards/>
            <Cards/>
            <Cards/>
        </div>
    </main>
  )
}

export default Producto