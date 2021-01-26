import React from 'react';

import { Container, ImgIconAbout } from './styles';

function BlockInfoAbout(props) {
  return (
    <Container>
        <ImgIconAbout src={props.img} alt="about logo" />
        <div className="linha"></div>
        <p>{props.content}</p>
    </Container>
  );
}

export default BlockInfoAbout;