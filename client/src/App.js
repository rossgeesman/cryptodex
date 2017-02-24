import React from 'react'
import FlashContainer from './containers/FlashContainer'
import { Container, Navbar, NavbarBrand } from 'reactstrap'
import './App.css'


function App({children}) {
  return (
    <Container fluid={true}>
      <div className='App'>
        <Navbar className='App-header'>
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
