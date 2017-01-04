import React from 'react'
import './App.css'
import ModalContainer from './components/ModalContainer'
  
function App({children}) {
  return (
    <div className='App'>
      <div className='App-header'>
        <h2>CryptoDex</h2>
      </div>
      {children}
      <ModalContainer />

    </div>
  )
}

App.propTypes = {
  children: React.PropTypes.element
}

export default App
