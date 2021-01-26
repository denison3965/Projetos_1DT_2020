import React, { useEffect, useState } from 'react';
import './styles.css'
import axios from 'axios'
import {Link} from 'react-router-dom'

function Form(props) {

    //Nome da pesquisa que eu quero mostrar
    console.log(props.match.params.pesquisa)

    //Todas as pesquisas
    const [dados, setDados] = useState([])
    const [anwser, setAnwser] = useState()
    const [showAnwser, setShowAnwser] = useState(false)
    const [correctAnwser, setCorrectAnwser] = useState()
    const [feedback, setFeedback] = useState('')
    const [message, setMessage] = useState('')


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




    //verificar se a resposta esta correta
    function verificar () {

        dados.map((pesquisa) => {
            if (pesquisa.referencia === props.match.params.pesquisa){
                setCorrectAnwser(pesquisa.correct)
                setFeedback(pesquisa.feedback)


                if(correctAnwser == anwser){
                    setMessage("Parabens !!!")
                }else{
                    setMessage("Ops, voce errou a questao !!!")
                }
                setShowAnwser(true)
            }else{
                
            }
        })
    }


    return (
        <div className="My_Body"> 
            <div className="Container">
            <Link to="/pesquisas"><button className="voltar"> Voltar </button></Link>
                <div className="page-title">

                    {
                        dados.map((pesquisa) => (
                            pesquisa.referencia == props.match.params.pesquisa ? (
                                <h1>{pesquisa.title}</h1>
                                
                            ) : (
                                <></>
                            )
                        ))
                    }
                    


                    <h5>Responda às questões para concluir a pesquisa:</h5>
                </div>

                {
                dados.map((pesquisa) => (
                    pesquisa.referencia == props.match.params.pesquisa? (
                        <div className="Question">
                        <p>{pesquisa.question}</p>
                        <div className="checkbox">
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="a" onChange={e => setAnwser(e.target.value)}></input>
                                <label class="form-check-label" for="exampleRadios1">
                                   {pesquisa.a}
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="b" onChange={e => setAnwser(e.target.value)}></input>
                                <label class="form-check-label" for="exampleRadios1">
                                    {pesquisa.b}
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="c" onChange={e => setAnwser(e.target.value)}></input>
                                <label class="form-check-label" for="exampleRadios1">
                                    {pesquisa.c}
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="d" onChange={e => setAnwser(e.target.value)}></input>
                                <label class="form-check-label" for="exampleRadios1">
                                    {pesquisa.d}
                                </label>
                            </div>
                        </div>
                    </div>
                    ):(
                        <></>
                    )
                ))
                }

                {showAnwser == true ? (
                    <div>
                        <span style={message == 'Parabens !!!' ? ({color: "green"}) : ({color: 'red'})}>{message}</span>
                        <div>{feedback}</div>
                    </div>

                ) : (
                  <></>  
                )}
                <div className="button">
                    <button type="button" class="btn" onClick={verificar}>Enviar</button>
                </div>
            </div>
        </div>
    );
}

export default Form;