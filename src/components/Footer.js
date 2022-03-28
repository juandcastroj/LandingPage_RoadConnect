import React from 'react'
import { Footer, FooterSocial, Icon } from '../styles/styles.jsx'

const PageFooter = () => {
  return (
    <Footer>
        <img src='https://i.ibb.co/Gpbfykx/cicla.png' alt='' width="130px"/>
        <div>
            
        </div>
        <div>
            <div>
                <img  src="{phoneIcon}" alt="" />
                <p>+57-322-123-4567</p>
            </div>
            <div>
                <img src="{emailIcon} "alt=''/>
                <p>bike@roadconnect.com</p>
            </div>
        </div>
        <div>
            <a href='#root'>About us</a>
           
        </div>
        <div>
            <a href='#root'>Contact us</a>
       
        </div>
        <div>
      </div>
      <FooterSocial>
        <Icon className="fab fa-facebook-f socials__icon"></Icon>
        <Icon className="fab fa-twitter socials__icon"></Icon>
        <Icon className="fab fa-instagram socials__icon"></Icon>
      </FooterSocial>
    
    </Footer>
  )
}

export default PageFooter