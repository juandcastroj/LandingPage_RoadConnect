import React, { useState } from 'react'
import { Form } from '../styles/styles.jsx'

const SignUp = () => {

  const [correo, setCorreo] = useState("")
  const [alerta, setAlerta] = useState("")

  const handleInputChange = ({target}) =>{
    setCorreo(target.value)
    validarCorreo(target.value)
  }

  const validarCorreo = (valor) =>{
    const formatoValido = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    const validacion = formatoValido.test(valor);
    if((!validacion)||(valor==="")){
      setAlerta("alerta")
    } else{
      setAlerta("")
    }
  }

  const handleSubmit = (e) =>{
    e.preventDefault()
    if((alerta==="")&&(correo!=="")){
      setCorreo("")
    }else{
      setAlerta("alerta")
    }
  }

  return (
    <Form id='signUp'>
        <div>
            <h3>Quieres publicar tu evento</h3>
            <p>
Deseas publicar tus eventos de ciclismo en nuestra app, dejanos tu correo electrónico y nosotros nos contataremos contigo.</p>
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    placeholder='email@example.com'
                    value={correo}
                    onChange={handleInputChange}
                ></input>
                <p className={alerta} >Porfavor ingrese un correo valido</p>
                <button type='submit'>Confirmar</button>
            </form>
        </div>
    </Form> 
  )
}

export default SignUp