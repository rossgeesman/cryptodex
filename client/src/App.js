import React from 'react'
import './App.css'
import FlashContainer from './containers/FlashContainer'


function App({children}) {
  return (
    <div className='App'>
      <div className='App-header'>
        <h2>AllTheCoins</h2>
      </div>
      <FlashContainer/>
      {children}
    </div>
  )
}

App.propTypes = {
  children: React.PropTypes.element
}

export default App
