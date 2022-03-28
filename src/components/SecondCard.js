import React from "react";
import { SecondSelect, SecondLink, SecondTitle } from "../styles/styles.jsx";
// import icon from '../images/icon-arrow.svg'

const SecondCard = () => {
  return (
    <SecondSelect>
      <img
        src="https://i.ibb.co/5kMbRx3/pngbyte-com-Google-My-Business-Localizaci-n-Google-Maps-Dibujos-animados-transparentes-chincheta-goo.png"
        alt=""
        width="15%"
      />
      <div>
        <SecondTitle> Conoce datos de las Rutas </SecondTitle>
        <div>
          <p>
            Podrás ver todas las rutas en la app. Puedes
            elegir diferentes niveles de dificultad, obtener datos de
            kilometraje, distancia, tiempo y desnivel positivo y negativo.
          </p>
          <p>
            Podrás utilizar el gps y compartir la ubicación de tu recorrido en
            tiempo real.
          </p>
        </div>
        <SecondLink href="frontendmentor.io">
        Vea cómo funciona 
          <img src="{icon}" alt="" />
        </SecondLink>
      </div>
    </SecondSelect>
  );
};

export default SecondCard;