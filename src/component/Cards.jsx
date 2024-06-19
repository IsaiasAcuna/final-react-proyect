import React from 'react';
//import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const Cards = () => {
    return (
        <div className="card" style={{ width: "18rem" }}>
            <img src="/CUADRO.png" className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">Poster</h5>
                <p className="card-text">1500</p>
                <a href="#" className="btn btn-primary">Comprar</a>
            </div>
        </div>
    )
}

export default Cards
