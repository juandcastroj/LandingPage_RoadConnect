import styled from "styled-components";
import { Card} from "react-bootstrap";

export const NavBar = styled.div` 
 background-color:#2038d4;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center; 
    `
export const ImgLogo = styled.img`
    width: 270px;
    padding: 3rem;
`
export const NavBarUl = styled.ul`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    flex-grow: 1;
    margin:40px;    
    a{
        color: white;
        font-family: "Raleway",sans-serif;
        font-size: 21px;
        opacity: .8;
        text-decoration: none;
        margin-left: 35px;

        &:hover{
            font-weight: bold;
            text-decoration: underline;
            color: #F4D03F;
        }
    }
    
`
///FistCard///

export const CardStyle = styled(Card)`
 background-color:#2038d4;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center; 
  font-family: "Raleway",sans-serif;
  margin-bottom: 2rem;
  border-color: transparent;
  margin: 0  5rem;
  width: 85%;
  font-size: 1.05em;
  font-weight: 400;
  max-width: 400px;
  >img{
      width: 30%;
  }
  @media screen and (max-width:375px){
      flex-direction: column;
  max-width: 10px;    
              }
 
  `
export const CardConten = styled.div`
padding:7rem;
background-color:#2038d4;
`

///Hero///

export const HeroSection = styled.div` 
background-color: #F4D03F;
  background-position: bottom;
  background-repeat: no-repeat;
  background-size: 100% 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 20px 25px;
  `
export const HeroTitle = styled.h1` 
 max-width: 600px;
  margin-bottom: 5px;
  color:#2038d4;
  font-family: "Raleway",sans-serif;
  `

export const HeroDesc = styled.p` 
  max-width: 600px;
  margin-bottom: 10px;
  padding: 0 25px;
  max-width: 400px;
  margin-bottom: 10px;
  color:#0a2998;
  font-family: "Raleway",sans-serif;
  `

export const Button = styled.button`
    width:260px;
    height:60px;
    border-radius:50px;
    border:none;
    background-image:linear-gradient(to right, hsl(176, 68%, 64%),hsl(198, 60%, 50%));
    color:white;
    font-family: 'Raleway', sans-serif;
    font-weight:700;
    font-size:1.25em;
    margin-top:20px;
    cursor:pointer;
    box-shadow:0px 1px 1px 1px hsl(198, 60%, 50%);
    &:hover{
      color: #F4D03F;
    }
    `
export const Imag = styled.img`
    width:45%;
    `

///Footer///

export const FooterSocial = styled.div`
  align-self: center;
  margin: 35px 0;
  color: white
`
export const Icon = styled.i`
width: 30px;
border: 1px solid white;
border-radius: 50%;
padding: 2px;
border: solid 1px white;
                
                &:hover{
                    color: #2038d4
                }
`
export const Footer = styled.footer`
    width: 100%;
    padding: 5rem 1rem;
    background-color: #F4D03F ;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-around;
    font-family: 'Raleway', sans-serif;
    font-size: 17px;
    position: relative;
    color: #2038d4

    >img{
        width: 80px;
        position: absolute;
        left: 7%;
    }
    >div{
        margin-top: 80px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
 
        div, a{
            display: flex;
            flex-direction: row;
            align-items: flex-start;
            justify-content: flex-start;
            margin-bottom: 15px;  
            margin-left:30px;
            &:hover{
                    color: #2038d4
                }
        }
        p, >a{
            color: white;
            text-decoration: none;
            max-width: 300px;
            margin-left: 15px;
            &:hover{
                    color: #2038d4
                }
        }
        >a:hover{
            font-weight: bold;
        }
    }
    @media screen and (max-width:800px){
        padding-top: 170px;
        flex-direction: column;
        img{
            position: relative;
        }
        >div{
            margin: 15px 5%;
            &:last-child{
                width:100%;
                margin: 15px 0;
                div{
                    width: 100%;
                    justify-content: center;
                }
            }
        }
    }
`
///Reviews///

export const Quotes = styled.section`
width: 100%;
padding: 90px;
background-color: #2038d4;
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
position: relative;
color: white;

@media screen and (max-width:850px){
    flex-direction: column;
}
 >div{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        font-family: "Open Sans",sans-serif;
        background-color:#0a2998;
        border-radius: 8px;
        box-shadow: 5px 5px 5px 0px #F4D03F;
        text-align: left;
        max-width: 350px;
        margin: 15px;
        padding: 30px 30px;
        z-index: 10; 
    }
    `
export const Image = styled.img`
width: 45px;
height: 45px;
border-radius:50px ;
float: left ;
`
export const Name = styled.p`
margin-left: 4rem;
display: flex;
flex-direction: column;
justify-content: space-around;
font-family: "Open Sans",sans-serif;  
`
export const Position = styled.span`
font-size: 13px;
margin-top:5px;
`

///SecondCard///
  
export const SecondSelect = styled.div`
  width: 100%;
    padding: 90px;
    background-color: #F4D03F;
    color:  #0a2998;;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    font-family: "Raleway",sans-serif;
   
    @media screen and (max-width:375px){
      flex-direction: column;
    }  
    >img{
        width: 35%;
    margin: auto ;
    vertical-align: middle;
    margin-right:50px ;
    }
`
export const SecondLink = styled.a`
color:  #0a2998;;
  text-decoration: none;
  padding-bottom: 3px;
  border-bottom: 1px solid hsl(176, 68%, 64%);
`
export const SecondTitle = styled.div`
font-weight: 900; 
font-size: 280%;
max-width:500px ;
margin-bottom: 10px ;

>img{
    flex-direction:row ;
}
`

//SignUp///

export const Form= styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding-top: 10px;
    background-color: #2038d4;
    >div{
        width: 800px;
        padding: 20px 25px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background-color: #0a2998;;
        color: white;
        text-align: center;
        border-radius: 1rem;
        box-shadow: 2px 4px 8px 2px rgba(0, 0, 0, 0.5);
        position: relative;
        bottom: -80px;
        z-index: 10;
        max-width: 75vw;
        h3{
            font-family: "Raleway",sans-serif;
            font-weight: 700;
            letter-spacing: 1.2px;
            margin: 10px 0;
        }
        >p{
            font-family: "Raleway",sans-serif;
            width: 85%;
            margin: 10px 0;
            font-weight: 400;
            
        }
        form{
            width: 90%;
            margin: 10px 0;
            padding: 5px 0 20px 0;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
            position: relative;
            
            input{
                margin-right: 20px;
                padding: 10px 15px;
                flex-grow: 1;
                font-family: "Raleway",sans-serif;
                border: none;
                border-radius: 25px;
                z-index: 20;
                
            }
            button{
                padding: 0.5rem 1rem ;
                font-size: 16x;
                font-family: "Raleway",sans-serif;
                font-weight: 700;
                text-transform: capitalize;
                border: none;
                border-radius: 5rem;
                background-image:linear-gradient(to right, hsl(176, 68%, 64%),hsl(198, 60%, 50%));
                color:white;
                &:hover{            
                    background-color: hsl(176, 68%, 64%);
                }
            }
            p{
                font-family: "Raleway",sans-serif;
                margin-left: 15px;
                font-size: 12px;
                font-weight: 700;
                color: hsl(0, 100%, 63%);
                position: absolute;
                bottom: 27px;
                -webkit-transition: all 0.3s ease-out;
                -o-transition: all 0.3s ease-out;
                transition: all 0.3s ease-out;
                visibility: hidden;
                &.alerta{
                    bottom: 0;
                    visibility: visible;
                }
            }
        }
        @media screen and (max-width:375px){
            width: 95%;
            bottom: -140px;
            form{
                flex-direction: column;
                input, button{
                    margin: 10px 0;
                    width: 100%;
                    z-index: 20;
                }
                >p{
                    margin: 0;
                }
            }
        }
    }
`