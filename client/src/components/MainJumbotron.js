import React from 'react'
import { connect } from 'react-redux'
import { startOrder } from '../actions/index.js'
import { Jumbotron, Container, Collapse, Button, CardBlock, Card } from 'reactstrap'
import OrderFormContainer from '../containers/OrderFormContainer'
import OrderStates from '../lib/OrderStates'

//Styling
import Styles from '../styles'
var jumbotronStyle = {
  backgroundColor: Styles.colors.brandLightGray
}
var buttonStyle = {
  marginBottom: '1rem',
  color: "#fff",
  backgroundColor: Styles.colors.brandGreen,
  borderColor: Styles.colors.brandGreen
}

var cardStyle = {
  minHeight: '300px',
  maxWidth: '750px',
  margin: 'auto'
}


const MainJumbotron = ({orderState, startOrder}) => {
  return (
    <Jumbotron style={jumbotronStyle} fluid>
      <Container fluid>
        <h2>Get exposure to blockchain assets by buying every coin exchanged on Shapeshift.io.</h2>
        <p className="lead">
          {(orderState === OrderStates.preRequesting) ? <Button onClick={startOrder} style={buttonStyle} active>Get Started</Button> : null}
        </p>
        <Collapse isOpen={(orderState === OrderStates.preRequesting) ? false : true}>
          <Card style={cardStyle}>
            <CardBlock>
              <OrderFormContainer/>
            </CardBlock>
          </Card>
        </Collapse>
      </Container>
    </Jumbotron>
  )
}

const mapStateToProps = (state) => ({
  orderState: state.order.orderState
})

const mapDispatchToProps = ({
  startOrder: startOrder
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainJumbotron)

