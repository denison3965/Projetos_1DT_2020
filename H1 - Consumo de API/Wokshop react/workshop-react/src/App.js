import React, { Component } from 'react';
import './App.css';
import PrimarySearchAppBar from './components/AppBar/AppBar';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Carousel from './components/Carousel/Carousel';
import SolidCard1 from './components/Cards/Card1';
import SolidCard2 from './components/Cards/Card2';
import Divider from '@material-ui/core/Divider';
import Box from './components/Box/Box';
import AlignItemsList from './components/List/List';
import FooterPage from './components/Footer/Footer';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <PrimarySearchAppBar/>
        <Carousel />
        <SolidCard1/>
        <SolidCard2/>
        <Box />
        <Divider />
        <Box />
        <AlignItemsList/>
        <AlignItemsList/>
        <Box />
        <FooterPage/>
      </React.Fragment>
    
    );
  }
}

export default App;