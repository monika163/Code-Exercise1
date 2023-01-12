import React, { useState } from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Cardsdata from './CardsData'
import "./style.css";

const Cards = () => {

  const [data, setData] = useState(Cardsdata);
  // console.log(data);
  return (
    <div className='container mt-3'>
      <h2 className='text-center'>Class </h2>
      <div className="row d-flex justify-content-center align-items-center">
        <p className='text-center' style={{ justifyContent: "center" }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.  </p>
      </div>


      <div className="row d-flex justify-content-center align-items-center">
        {
          data.map((element, id) => {
            return (
              <>
                <Card style={{ width: '22rem', border: "none" }} className="mx-2 mt-4 card_style">
                  <br></br>
                  <Card.Img variant="top" src={element.ImageUrl} style={{ height: "16rem" }} className="mt-3" />
                  <Card.Body>
                    <Card.Title style={{ justifyContent: "center" }}>{element.Name}</Card.Title>
                    <Card.Text>
                      {element.ShortDesc}
                    </Card.Text>

                    <div className="button_div d-flex justify-content-center">
                      <Button variant="primary"

                        className='col-lg-3'>View</Button>
                    </div>

                  </Card.Body>
                </Card>
              </>
            )
          })
        }

      </div>
    </div>
  )
}

export default Cards