import React from 'react';
import { Popover, PopoverTitle, PopoverContent, Button } from 'reactstrap'
import ContentsList from './ContentsList'

const ContentsPopover = (props) => {
  const contents = (props) => {
    if (props.estimates !== undefined) {
      return <ContentsList estimates={props.estimates} coins={props.coins} />
    } else {
      return "Needs some BTC first."
    }
  }
  
  return (
    <div>
      <Button href="" id='Popover1' onClick={(e) => (e.preventDefault())} onMouseOver={props.togglePopover} onMouseOut={props.togglePopover} >
        View Order
      </Button>  
      <Popover placement="bottom" isOpen={props.popoverIsOpen} target="Popover1" toggle={props.togglePopover}>
        <PopoverTitle>Assets</PopoverTitle>
        <PopoverContent>
          {contents(props)}
        </PopoverContent>
      </Popover>
    </div>
  )
  
}

ContentsPopover.propTypes = {
  togglePopover: React.PropTypes.func,
  popoverIsOpen: React.PropTypes.bool
}

export default ContentsPopover