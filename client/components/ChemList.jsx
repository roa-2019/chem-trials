import React from 'react'

export default class ChemList extends React.Component {
  constructor(props){
    super(props)

    this.state ={
      chemical: ''
    }
  }

  render() {
    return(
      <React.Fragment>
        <h3>Click a chemical to find your dose!</h3>
      </React.Fragment>
    )
  }
}