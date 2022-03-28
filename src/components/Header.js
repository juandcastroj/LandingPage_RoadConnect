import React from 'react'
import { ImgLogo, NavBar, NavBarUl} from '../styles/styles'
const Header = () => {
  return (
    <NavBar>
      <ImgLogo src="https://i.ibb.co/Gpbfykx/cicla.png" alt="" border="0" className=""></ImgLogo>
      <NavBarUl>     
            <a href='#signin'>Login</a>
            <a href='#signin'>Perfil</a>
            <a href='#signin'>Rutas</a>
            <a href='#signin'>Contactanos</a>
      </NavBarUl>
    </NavBar>
  )
}

export default Header