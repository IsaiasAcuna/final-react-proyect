import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../component/Navbar'

const Contacto = () => {
  return (
    <main className="container">
      <Navbar />
      <h1 className="text-success text-center m-5">Contacto</h1>
      <div className="card">
        <div className="card-header">
          Whatsapp
        </div>
        <div className="card-body">
          <h5 className="card-title">Posters digitales</h5>
          <p className="card-text">Mas informacion sobre los posters</p>
          <a href="#" className="btn btn-success">Chatear</a>
        </div>
      </div>
    </main>
  )
}

export default Contacto