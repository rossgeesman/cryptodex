import React from 'react'
import { connect } from 'react-redux'
import { startOrder, switchTab } from '../actions/index.js'
import { Jumbotron, Container, Collapse, Button, CardBlock, Card } from 'reactstrap'
import OrderStates from '../lib/OrderStates'
import TabMenu from './TabMenu'

//Styling
import Styles from '../styles'
var jumbotronStyle = {
  paddingTop: '110px',
  backgroundColor: Styles.background.backgroundColor,
  backgroundImage: Styles.background.backgroundImage,
  color: 'white',
  minHeight: '600px'
}
var buttonStyle = {
  marginBottom: '1rem',
  color: "#fff",
  backgroundColor: Styles.colors.brandGreen,
  borderColor: Styles.colors.brandGreen,
  borderRadius: Styles.shapes.borderRadius
}

var cardStyle = {
  minHeight: '360px',
  maxWidth: '750px',
  margin: 'auto',
  backgroundColor: Styles.colors.brandLightGray,
  border: 'none',
  boxShadow: '0px 6px 25px 0px',
  color: 'black',
  borderRadius: Styles.shapes.borderRadius
}

var cardBlockStyle = {
  padding: '0px'
}

var heroTextStyle = {
  marginBottom: '60px'
}


const MainJumbotron = ({orderState, startOrder, activeTab, switchTab, estimates, coins, perCoin, transactions}) => {
  return (
    <Jumbotron style={jumbotronStyle} fluid>
      <Container fluid>
        <div style={heroTextStyle}>
          <h1 className="display-3">Buy all of the coins</h1>
          <p className="lead">
            Gain exposure to blockchain assets with one click.
          </p>
        </div>
        {(orderState === OrderStates.preRequesting) ? <Button onClick={startOrder} style={buttonStyle} active>Get Started</Button> : null}
        <Collapse isOpen={(orderState === OrderStates.preRequesting) ? false : true}>
          <Card style={cardStyle}>
            <CardBlock style={cardBlockStyle}>
              <TabMenu
                orderState={orderState}
                activeTab={activeTab}
                switchTab={switchTab}
                coins={coins}
                estimates={estimates}
                perCoin={perCoin}
                transactions={transactions}
              />
            </CardBlock>
          </Card>
        </Collapse>
      </Container>
    </Jumbotron>
  )
}

const mapStateToProps = (state) => ({
  orderState: state.order.orderState,
  activeTab: state.order.activeTab,
  estimates: state.order.estimates,
  coins: state.order.coins,
  perCoin: state.order.perCoin,
  transactions: state.order.transactions
})

const mapDispatchToProps = ({
  startOrder: startOrder,
  switchTab: switchTab
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainJumbotron)

