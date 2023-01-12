import React, { useState } from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Cardsdata from './CardsData'
import "./style.css";



const Jumbotron = () => {

    const [data, setData] = useState(Cardsdata);
    // console.log(data);


    return (

        <div className="row d-flex justify-content-center align-items-center">


            <div className='container mt-1 ' style={{ backgroundColor: "#5656a0", height: "200px" }}>
                <br></br>
                <br></br>
                <h2 className='text-center'>Title</h2>

                <div className="row d-flex justify-content-center align-items-center">
                    <p className='text-center' style={{ justifyContent: "center" }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.  </p>
                </div>

                <p className='text-center'><button>Read More</button></p>


            </div>



        </div>
    )
}

export default Jumbotron