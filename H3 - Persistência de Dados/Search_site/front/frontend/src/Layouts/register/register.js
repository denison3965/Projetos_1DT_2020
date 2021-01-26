import React, {useState} from 'react'
import '../../Layouts/register/register.css'
import FormQuestion from '../../components/FormQuestion'
import axios from 'axios'

const Register =()=>{
    return(
      <div className="gradiente">
         <div className="container_register">
            <h2> Cadastrar nova pesquisa </h2> 
            <p></p>
            <div>
               <FormQuestion/>
            </div>
            <button className="btn--enviar">Enviar</button> 
         </div>
      </div>
    )
}

export default Register;