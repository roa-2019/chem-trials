import React from 'react'

import { getFruits } from '../apiClient'

class App extends React.Component {
  // state = {
  //   chemicals: []
  // }

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
          {/* {this.state.fruits.map(fruit => (
            <li key={fruit}>{fruit}</li> */}
          {/* ))} */}
        </ul>
      </div>
    )
  }
}

export default App
