import React from 'react'
import PropTypes from 'prop-types'
import FlashContainer from './containers/FlashContainer'
import ModalContainer from './containers/ModalContainer'
import MainJumbotron from './components/MainJumbotron'
import { Container, Navbar, NavbarBrand } from 'reactstrap'
import './App.css'

var appStyle = {
  textAlign: 'center'
}
var appHeaderStyle = {
  width: '100%',
  textAlign: "left",
  height: "60px",
  backgroundColor: 'white',
  paddingLeft: '3%'
}

var brandStyle = {
  color: 'black'
}


function App({children}) {
  return (
    <Container fluid={true} className="full-width">
      <div style={appStyle}>
        <ModalContainer/>
        <Navbar style={appHeaderStyle}>
          <NavbarBrand style={brandStyle}>AllTheCoins</NavbarBrand>
        </Navbar>
        <FlashContainer/>
        <MainJumbotron/>
      </div>
    </Container>
  )
}

App.propTypes = {
  children: PropTypes.element
}

export default App
