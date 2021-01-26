import styled from 'styled-components';

export const Container = styled.div`
  width: 30%;
  height:200px;
  display: flex;
  flex-direction:column;
  justify-content:flex-start;
  align-items:center;
  border-style: solid;
  border-image: 
    linear-gradient(
      to bottom, 
      #F2C029, 
      rgba(0, 0, 0, 0)
    ) 1 100%;

  .linha{
      height:3px;
      width:100px;
      margin-top:10px;
      margin-bottom:20px;
      background-color: #F29A2E;
  }

  & p{
      font-family: 'Roboto', sans-serif;
      font-weight: 100;
  }

  @media (max-width: 800px) {
    width:80%;
  }
`;

export const ImgIconAbout = styled.img`
    height:50px;
    width:50px;
`;
