import React, {useState} from 'react';
import './styles.css'

// import { Container } from './styles';

function FormQuestion() {

  //iniciando estados
  const [titulo, setTitulo] = useState('')
  const [questao, setQuesta] = useState('')
  const [a, setA] = useState('')
  const [b, setB] = useState('')
  const [c, setC] = useState('')
  const [d, setD] = useState('')
  const [correct, setCorrect] = useState('')
  const [feedback, setFeedback] = useState('')



  function registerApi () {

    let url = 'https://api.sheety.co/4ab649c7ce6367df9437a288b09ed6f4/disponiveis/disponiveis';
    
    let body = {
      disponivei:{
        "title": titulo,
        "question": questao,
        "a": a,
        "b": b,
        "c": c,
        "d": d,
        "correct": correct,
        "feedback": feedback 
      }
    }
    
    console.log(body)
    
    fetch(url, {
      method: 'post',
      body: JSON.stringify(body),
      header: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
        'Origin': '*'
      }
    })
    .then((res) => console.log(res)).catch(err => console.log(err));

 }



  return (
    <form >
        <div class="titulo--pesquisa">
          <label for="">Título da pesquisa </label>  
           <input type="text" className="titulo" id="" placeholder="" onChange={e => setTitulo(e.target.value)} />
         </div>
      <div class="adicionar--pergunta">
        <label for="">Adicionar pergunta</label> <br/> 
        <input type="text" className="titulo" id="" placeholder="" onChange={e => setQuesta(e.target.value)} />
      </div>
      <fieldset class="form-group">
        <div class="respostas">
          <legend class="col-form-label col-sm-2 pt-0"> Respostas  </legend>
          <div class="col-sm-10">
            <div class="valores">
            <label class="" for="gridRadios1">
                A 
                <div className="line-under-title"></div>
                <input className="resposta--a" type="text" onChange={e => setA(e.target.value)} />
              </label>
            </div>
            <div class="valores">
            <label class="form-check-label" for="gridRadios2">
                B
                <div className="line-under-title"></div>
               <input className="resposta--b" type="text" onChange={e => setB(e.target.value)} />
              </label>
            </div>
            <div class="valores">
            <label class="form-check-label" for="gridRadios3">
                C
                <div className="line-under-title"></div>
                <input className="resposta--c" type="text" onChange={e => setC(e.target.value)} />
              </label>
            </div>
            <div class="valores">
              <label class="form-check-label" for="gridRadios4">
                D
                <div className="line-under-title"></div>
                <input className="resposta--d" type="text" onChange={e => setD(e.target.value)} />
              </label>
            </div>
          </div>
        </div>
      </fieldset>
      <div className="respota--correta"> 
      <form class="form-inline">
        <label class="my-1 mr-2" for="inlineFormCustomSelectPref">Resposta-Correta</label>
        <select class="selecao" id="inlineFormCustomSelectPref">
          <option selected> A</option>
          <option value="1">B</option>
          <option value="2">C</option>
          <option value="3">D</option>
        </select>
      </form>
      </div>
      <div class="form-group">
        <label className="feedback" for="exampleFormControlTextarea1">Feedback</label>
        <textarea class=" area--texto" id="exampleFormControlTextarea1" rows="3" onChange={e => setFeedback(e.target.value)}></textarea>
        <p>{feedback}</p>
      </div>
      
      {/* <div className="btn btn-danger" onClick={registerApi}> cadastra pergunta </div> */}
    </form>

  )
}

export default FormQuestion;