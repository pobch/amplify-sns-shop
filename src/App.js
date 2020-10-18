import React from 'react'
import './App.css'
import { withAuthenticator } from '@aws-amplify/ui-react'

function App() {
  return <div className="App">Whatzup, world</div>
}

export default withAuthenticator(App)
