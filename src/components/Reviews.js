import React from "react";
import profile1 from '../images/profile1.jpg'
import profile2 from '../images/profile2.jpg'
import profile3 from '../images/profile3.jpg'
import { Quotes, Image, Name, Position } from "../styles/styles.jsx";

const Reviews = () => {
  const reviewsData = [
    {
      id: "0",
      desc: "Es una ruta con 90% de camino carreteable, de poca exigencia técnica pero de una exigencia física alta ya que la ruta es bastante larga y cada ascenso es de inclinaciones que van entre un suave 6% ",
      img: profile1,
      name: "Suesca Cucunuba - Villa de Leyva",
      position: "Distancia: 99,52 km  Desnivel positivo: 2.244 m  Desnivel negativo: 2.696 m" ,
    },
    {
      id: "1",
      desc: "Es una ruta desafiante técnica y físicamente. Los tramos son complicados con mucha roca, demasiado barro debido al invierno, rocas planas y resbalosas lo cual da poca tracción y exige las destrezas",
      img: profile2,
      name: "Bojaca - Tena - Bojaca",
      position: "Distancia: 32,65 km Desnivel positivo: 1.801 m  Desnivel negativo: 1.813 m",
    },
    {
      id: "2",
      desc: "Saliendo por la Avenida Boyaca - calle 80 - alto el vino - la Vega. Es un recorrido realmente extenso, con un descenso de 30 kms aprox hasta la Vega y por ende el mismo ascenso",
      img: profile3,
      name: "Bogotá - la Vega - Bogotá",
      position: "Distancia: 140,06 km Desnivel positivo: 2.048 m Desnivel negativo: 2.043 m",
    },
  ];

  return (
    <Quotes>
      {reviewsData.map((review) => (
        <div className="review">
          <p className="review__desc">{review.desc}</p>
          <div className="info__section">
            <Image src={review.img} alt="" className="profile__img" />
            <Name>
              {review.name} <br /> <Position>{review.position}</Position>
            </Name>
          </div>
        </div>
      ))}
    </Quotes>
  );
};

export default Reviews