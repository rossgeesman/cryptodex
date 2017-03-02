import React from 'react'
import FlashContainer from './containers/FlashContainer'
import { Container, Navbar, NavbarBrand } from 'reactstrap'
import './App.css'

var appStyle = {
  textAlign: 'center'
}
var appHeaderStyle = {
  textAlign: "left",
  height: "50px",
  paddingTop: "30px",
  marginBottom: "40px"
}

function App({children}) {
  return (
    <Container fluid={true}>
      <div style={appStyle}>
        <Navbar style={appHeaderStyle}>
          <NavbarBrand>AllTheCoins</NavbarBrand>
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
