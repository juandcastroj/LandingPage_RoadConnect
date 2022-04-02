import React from 'react'
import { ImgLogo, LinkStyle, NavBar, NavBarUl} from '../styles/styles'
const Header = () => {
  return (
    <NavBar>
      <ImgLogo src="https://i.ibb.co/Gpbfykx/cicla.png" alt="logo"></ImgLogo>
      <NavBarUl>     
            <LinkStyle href='#signin'>Login</LinkStyle>
            <a href='#signin'>Perfil</a>
            <a href='#signin'>Rutas</a>
            <a href='#signin'>Contactanos</a>
      </NavBarUl>
    </NavBar>
  )
}

export default Header