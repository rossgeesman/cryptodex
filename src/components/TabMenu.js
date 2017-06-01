import React from 'react'
import { TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap'
import OrderFormContainer from '../containers/OrderFormContainer'
import InvoiceContainer from '../containers/InvoiceContainer'
import Styles from '../styles'

var navTabsStyle = {
  border: 'none'
}

var navLinkStyle = (state) => {
  if (state === false)
    return {
      color: Styles.colors.brandMediumGray, 
      border: 'none',
      borderColor: 'transparent',
      borderRadius: '0px',
      borderBottom: 'none'
    }
  else
    return {
      color: Styles.colors.brandBlue,
      backgroundColor: Styles.colors.brandLightGray,
      border: 'none',
      borderBottom: '2px solid',
      borderColor: Styles.colors.brandBlue,
      borderRadius: '0px'
    }
}

const TabMenu = ({activeTab, switchTab, coins, estimates, orderState, transactions, perCoin}) => {
   return (
      <div>
        <Nav style={navTabsStyle} tabs>
          <NavItem>
            <NavLink
              style={navLinkStyle(activeTab === 'purchase')}
              onClick={(e) => (switchTab('purchase'))}
            >
              Order
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              style={navLinkStyle(activeTab === 'invoice')}
              onClick={(e) => (switchTab('invoice'))}
            >
              Invoice
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={activeTab}>
          <TabPane tabId='purchase'>
            <OrderFormContainer/>
          </TabPane>
          <TabPane tabId="invoice">
            <InvoiceContainer/>
          </TabPane>
        </TabContent>
      </div>
    )
}

TabMenu.propTypes = {
  orderState: React.PropTypes.string,
  switchTab: React.PropTypes.func,
  activeTab: React.PropTypes.string
}

export default TabMenu