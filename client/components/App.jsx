import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'

import Chemicals from './Chemicals'
import Calculator from './Calculator'

class App extends React.Component {
  constructor(props){
    super(props)
  }

  render () {
    return (
      <Router>
      <div className='app'>
        <h1>Chem Trials</h1>
          <Route path='/' component={Chemicals} />
          <Route path='/calculator/:id' component={Calculator} />
      </div>
      </Router>
    )
  }
}

export default App


