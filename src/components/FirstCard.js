import React from 'react'

import {  Row, Col, Card } from 'react-bootstrap'
import { CardStyle, CardConten } from '../styles/styles.jsx'

function FirstCard() {

const dataList = [
  {
    "id": "0",
    "img": "https://i.ibb.co/gvdYYHX/596ce466ed07ad6118f998f6.png" ,
    "title": "Acceda a una comunicadad de cliclistas",
    "desc": "ya sea por medio de los ciclistas relacionados por medio de tu ubicación o por eventos próximos a realizarce."
  },
  {
    "id": "1",
    "img": "https://i.ibb.co/bQb68Wg/icons8-mapas-de-google-50.png",
    "title": "Sientase seguro compartiendo su ubicacion",
    "desc": "manten a tus contactos informados a cerca de donde te encuentras realizando tus rutas.                                                                                   "
  },
  {
    "id": "2",
    "img": "https://i.ibb.co/qJzdqdc/8986c529796ac473927cabecb9145005-pictograma-de-deporte-paralimpico-ciclismo.png",
    "title": "Encuentra ciclistas cerca a ti",
    "desc": "por medio de nuestra ubicación podemos ver quienes de nuestros usuarios viven cerca a tu residencia y poder contactarlos para rodar."
  },
  {
    "id": "3",
    "img": "https://i.ibb.co/xHRw9MN/pngbyte-com-Vector-silueta-de-ciclista-de-monta-a-silueta-de-bicicleta-de-monta-a-Png-Pic-ciclista-B.png",
    "title": "Participe de los eventos",
    "desc": "si lo que deseas es medirte a nivel competitivo con otros ciclistas aficionados puedes ver la información sobre eventos próximos."
  }
];


  return (
    <CardConten>
  <Row xs={1} md={2} className="g-4">
      {dataList.map(data => (
        <Col>
          <CardStyle key={data.id} >
            <img src={data.img} alt="" width="120px"/>
            <Card.Body className="card_Select">
              <Card.Title style={{color: 'black'}} >{data.title}</Card.Title>
              <Card.Text>
              {data.desc}
              </Card.Text>
            </Card.Body>
          </CardStyle>
        </Col>
      ))}
    </Row> 
      </CardConten>
   
  )
}

export default FirstCard