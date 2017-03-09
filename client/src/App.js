import React from 'react'
import FlashContainer from './containers/FlashContainer'
import ModalContainer from './containers/ModalContainer'
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
  paddingLeft: '80px'
}

var brandStyle = {
  color: 'black'
}

var containerStyle = {
  padding: '0px'
}

function App({children}) {
  return (
    <Container fluid={true} style={containerStyle}>
      <div style={appStyle}>
        <ModalContainer/>
        <Navbar style={appHeaderStyle}>
          <NavbarBrand style={brandStyle}>AllTheCoins</NavbarBrand>
        </Navbar>
        <FlashContainer/>
        {children}
      </div>
    </Container>
  )
}

App.propTypes = {
  children: React.PropTypes.element
}

export default App
