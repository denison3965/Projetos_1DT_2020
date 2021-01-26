import React, { useEffect, useState }from 'react';
import './styles.css';
import ImagemWorld from './img/worldverde.jpg';
import axios from 'axios'
import {Link, Route} from 'react-router-dom'
import {useHistory} from 'react-router-dom'
import Form from '../Forms';


const Researchs = () => {

   

    const [dados, setDados] = useState([])


    
    useEffect(() => {

        let url = 'https://api.sheety.co/0166d8c33451b582d837428a4a720801/disponiveis/disponiveis';

        axios
            .get(url)
            .then((res) => {
                console.log(res.data.disponiveis)
                setDados(res.data.disponiveis)
            })
            .catch(err => console.log(err))
    }, [])

    return (
        <div className="fundo-verde">
            <div className="container-branco">
            <Link to="/"><button className="voltar"> Voltar </button></Link>
                <h1>Pesquisas disponíveis</h1>
            <div className="area-cards">
                {/* LISTANDO TODAS AS PESQUISAS */}
                {
                    dados.map((element) => (
                        <div class="card" style={{width: "18rem"}} >
                            <img class="card-img-top" src={ImagemWorld} alt="Imagem de capa do card"/>
                            <div class="cardword">
                                <h5 class="card-title">{element.title}</h5>
                                <p class="card-text">{element.description}</p>
                                <div>
                                 <Link to={element.url} teste={element.referencia} > 
                                <button  class="btn--responder"> Responder </button>
                                </Link> 
                                </div>
                            </div>
                        </div>
                        
                    ))
                }

            </div> 
            </div>
        </div>
    )
}

export default Researchs