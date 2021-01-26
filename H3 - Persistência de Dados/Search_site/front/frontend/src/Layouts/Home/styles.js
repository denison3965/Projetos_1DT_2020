import styled, { keyframes } from 'styled-components';

import backgroundImage from './img/bk.png';

export const Container = styled.div`
  width:100%;
  display: flex;
  flex-direction: column;
  position : relative;
  overflow:hidden;
  background-color: none;

  .Top-part{
    height:90vh;
    width:100%;
    background: linear-gradient(180deg, #08A689 0%, rgba(255, 255, 255, 0) 100%), #03AAB3;
    position: relative;
      
      .content-wraper{

        background: url(${backgroundImage}) no-repeat 70% top;

        .Info{
          margin-left:50px;
          font-family: 'Roboto', sans-serif;
          color: white;
        }
        .Info h1{
          max-width: 700px;
          font-size:76px;
          font-weight: 900;
          line-height: 70px;
        }
        .Info h4{
          max-width: 700px;
          font-size:20px;
          font-weight: 100;
          line-height: 70px;
        }


        .btn_enter{
          text-decoration: none;
          background: #F29A2E;
          background-image: -webkit-linear-gradient(top, #F29A2E, #F2C029);
          background-image: -moz-linear-gradient(top, #F29A2E, #F2C029);
          background-image: -ms-linear-gradient(top, #F29A2E, #F2C029);
          background-image: -o-linear-gradient(top, #F29A2E, #F2C029);
          background-image: -webkit-gradient(to bottom, #F29A2E, #F2C029);
          -webkit-border-radius: 20px;
          -moz-border-radius: 20px;
          border-radius: 20px;
          color: #FFFFFF;
          font-family: Roboto;
          font-size: 25px;
          font-weight: 100;
          padding: 20px;
          -webkit-box-shadow: 0 1px 8px 0 #000000;
          -moz-box-shadow: 0 1px 8px 0 #000000;
          box-shadow: 0 1px 8px 0 #000000;
          text-shadow: 1px 1px 20px #FFFFFF;
          text-decoration: none;
          display: inline-block;
          cursor: pointer;
          text-align: center;

          position:absolute;
          right:100px;
          top:60%;

        }

        .btn_enter:hover {
          border: solid #F2C029 1px;
          background: #F2C029;
          background-image: -webkit-linear-gradient(top, #F2C029, #F29A2E);
          background-image: -moz-linear-gradient(top, #F2C029, #F29A2E);
          background-image: -ms-linear-gradient(top, #F2C029, #F29A2E);
          background-image: -o-linear-gradient(top, #F2C029, #F29A2E);
          background-image: -webkit-gradient(to bottom, #F2C029, #F29A2E);
          -webkit-border-radius: 20px;
          -moz-border-radius: 20px;
          border-radius: 20px;
          text-decoration: none;
        }
        @media (max-width: 800px){
          .Info{
            margin-top:420px;
            width: 350px;
            height: 500px;
            margin-left:0px;

          }
          .Info h1{
            max-width: 350px;
            font-size:50px;
            font-weight: 900;
            line-height: 40px;
          } 
          .Info h4{
           display:none;  
          }
          .btn_enter{
            top:75%;
          }
          
        }
      }
  }

  @media (max-width: 800px) {
    .Top-part{
      height:900px;
    }
  }
  .Bottom-part{
    min-height:500px;
    width:100%;

    .content-wraper-bottom{
      max-width:1180px;
      margin:80px auto;
      display: flex;
      flex-direction:column;
      .content-wraper-bottom-block-info{
        display: flex;
        flex-direction: row;
        justify-content: space-around;
      }

      .content-about-us {
        margin-top: 50px;
        font-family: 'Roboto', sans-serif;
        margin-left:30px;
        margin-right:30px;

        & h1 {
          font-size:45px;
          font-weight: 100;
          color: #444;
        }
        & .second-title{
          font-size:40px;
          font-weight: 100;
          color: #444;
          margin-top:50px;
        }
        & .line-under-title{
          height:3px;
          width:150px;
          background-color:#F29A2E;
          margin-bottom:50px;
          margin-left:25px;
        }
        & p {
          font-weight:100;
          font-size:20px;
          color: #444;
        }
      }
      @media (max-width: 800px) {
        .content-wraper-bottom-block-info{
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        .content-about-us{
          width:80%;
        }
      }

    }

  }

   


`;

const animation = keyframes`
  0% {transform: translateX(0) translateZ(0) scaleY(1)}
  0% {transform: translateX(-25%) translateZ(0) scaleY(.5)}
  0% {transform: translateX(-50%) translateZ(0) scaleY(1)}
`;

export const WaveImg = styled.img`
  width:200%;
  position: absolute;
  bottom:0vh;
  left:0;
  right:0;
 
  background-position: 0 bottom;
  background-repeat: repeat-x;
  background-size:50% 75px;
  transform-origin: center bottom;
  height:80px;

  &:nth-child(1){
    animation: ${animation} 6s linear infinite;
    opacity:1;
    z-index:10
  }
  &:nth-child(2){
    animation: ${animation} 9s linear infinite;
    opacity:.75;
    z-index:11;
  }
  &:nth-child(3){
    animation: ${animation} 11s linear infinite;
    opacity:.5;
    z-index:12;
  }



`;

export const LogoImage = styled.img`
  height:200px;
  width:350px;
  @media (max-width: 800px) {
    height:0;
    width:0;
  }
`;
export const Container2 = styled.div`
  background: linear-gradient(180deg, #08A689 0%, rgba(255, 255, 255, 0) 100%), #03AAB3;

  a{
    color: white;
    font-family: 'Roboto', sans-serif;
    font-size: 18px
  }

  p{
    font-family: Calibri;
    align-itens: center;
    font-size: 20px;
    width: 88vh;
  }
`;
