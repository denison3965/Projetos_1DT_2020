import React from 'react';
import Wave from './img/waves.png';
import Logo from './img/logo.png'
import BlockInfoAbout from '../../components/BlockInfoAbout'
import {Link} from 'react-router-dom'

import { Container, Container2, WaveImg, LogoImage } from './styles';

import { MDBCol, MDBContainer, MDBRow, MDBFooter } from 'mdbreact';

//Importing the Icons for About 
import Reciclagem from '../../components/BlockInfoAbout/img/reciclar.png'
import Folha from '../../components/BlockInfoAbout/img/folha.png'
import Baleia from '../../components/BlockInfoAbout/img/baleia.png'

function Home() {
  return (
     <Container>
         <div className="Top-part">
            <div className="content-wraper">
                <LogoImage src={Logo} alt="Logo word" />
                <div className="Info">
                  <h1>COM SUA AJUDA PODEMOS SALVAR O PLANETA</h1>
                  <h4>Faça a sua parte, ajude a fazer um mundo melhor com sua opinião.</h4>
                </div>
                <Link to="/pesquisas">
                  <div class="btn_enter">
                    Pesquisas
                  </div>
                </Link>
            </div>

            <WaveImg src={Wave} alt="image waves"/>
            <WaveImg src={Wave} alt="image waves"/>
            <WaveImg src={Wave} alt="image waves"/>
         </div>
         <div className="Bottom-part">
            <div className="content-wraper-bottom">
              <div className="content-wraper-bottom-block-info">
                <BlockInfoAbout img={Folha}content="Preservando a natureza"/> 
                <BlockInfoAbout img={Reciclagem}content="Reduzir, Reutilizar, Reciclar"/>
                <BlockInfoAbout img={Baleia}content="Preservando as espécies"/>
              </div>
              <div className="content-about-us">
                <h1>Sobre nós</h1>
                <div className="line-under-title"></div>
                <p>Fundada em 2020, a World atua promovendo e incentivando a sustentabilidade e a re-educação ambiental, acolhendo todos os individuos que se dispoem a participar de nossas pesquisas para o Movimento Verde, para que se unam à nós em prol de um mundo melhor.</p>

                <p>Visamos sempre o bem-estar das pessoas e do nosso planeta, compartilhando conhecimentos valiosos e dicas que fazem toda a diferença. Fazemos uso das opiniões dos voluntários para conhecer melhor a conscientização de cada um e cada vez mais expandir o alcance do nosso movimento. </p>

                <h1 className="second-title">O Movimento Verde</h1>
                <div className="line-under-title"></div>

                <p>Podemos resumir o Movimento Verde em quatro palavras: Reduzir, Reutilizar e Reciclar. Também conhecidas como os três R's da sustentabilidade, seu objetivo é minimizar o impacto ambiental causado pelo desperdício de materiais e descarte inadequado dos mesmos. </p>

                <p>Mas você deve estar se perguntando: "E a quarta palavra?", e aqui está: O quarto R, Repensar. Acima de tudo, buscamos sempre abrir mais olhos e conscientizar cada vez mais pessoas sobre a preservação do meio ambiente, e tudo começa repensando as nossas ações para com ele. Todos podem participar, sem nenhum custo. Muito pelo contrário... com muitos benefícios.</p>

                <p>E aí, o que está esperando para participar? Contribua você também!</p>

              </div>
            </div>
         </div>

        <Container2>
              <MDBFooter color="indigo" className="font-small pt-0">
            <MDBContainer>
              <MDBRow className="pt-5 mb-3 text-center d-flex justify-content-center">
                <MDBCol md="2" className="b-3">
                  <h6 className="title font-weight-bold">
                    <a href="">SOBRE NÓS</a>
                  </h6>
                </MDBCol>
                <MDBCol md="2" className="b-3">
                  <h6 className="title font-weight-bold">
                    <a href="">PESQUISAS</a>
                  </h6>
                </MDBCol>                
                <MDBCol md="2" className="b-3">
                  <h6 className="title font-weight-bold">
                    <a href="">AJUDA</a>
                  </h6>
                </MDBCol>
                <MDBCol md="2" className="b-3">
                  <h6 className="title font-weight-bold">
                    <a href="">CONTATO</a>
                  </h6>
                </MDBCol>
              </MDBRow>
              <hr className="rgba-white-light" style={{ margin: "0 15%" }} />
              <MDBRow className="d-flex text-center justify-content-center mb-md-0 mb-4">
                <MDBCol md="8" sm="12" className="mt-5">
                  <p style={{ lineHeight: "1.6rem", textAlign:"justify"}}>
                  Fundada em 2020, a World atua promovendo e incentivando a sustentabilidade e a re-educação ambiental, acolhendo todos os individuos que se dispoem a participar de nossas pesquisas para o Movimento Verde, para que se unam à nós em prol de um mundo melhor.
                  </p>
                </MDBCol>
              </MDBRow>
              <hr className="clearfix d-md-none rgba-white-light" style={{ margin: "10% 15% 5%" }} />
              
            </MDBContainer>
            <div className="footer-copyright text-center py-3">
              <MDBContainer fluid>
                &copy; {new Date().getFullYear()} Copyright:
                <a href="#"> WORLD.com </a>
              </MDBContainer>
            </div>
          </MDBFooter>
        </Container2>
     </Container>
  );
}
export default Home;