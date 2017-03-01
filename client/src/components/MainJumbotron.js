import React from 'react'
import {Jumbotron, Container} from 'reactstrap'
import OrderFormContainer from '../containers/OrderFormContainer'

const MainJumbotron = ( ) => {
  return (
      <Jumbotron fluid>
        <Container fluid>
          <h3>Get exposure to blockchain assets by buying every coin exchanged on Shapeshift.io.</h3>
        </Container>
        <OrderFormContainer/>
      </Jumbotron>
  )
}

export default MainJumbotron