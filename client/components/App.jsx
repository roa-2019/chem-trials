import React from 'react'

import ChemList from './ChemList'
import Chemicals from './Chemicals'

class App extends React.Component {
  constructor(props){
    super(props)
  }

  // componentDidMount () {
  //   getChems()
  //     .then(fruits => {
  //       this.setState({fruits})
  //     })
  // }

  render () {
    return (
      <div className='app'>
        <h1>Chem Trials</h1>
        <ul>
          <Chemicals />
          <ChemList />
        </ul>
      </div>
    )
  }
}

export default App
