import React from 'react'

import { getChemById } from '../apiClient'

export default class Calculator extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      chemical: {}
    }
  }

  componentDidMount() {
    getChemById(this.props.match.params.id)
    .then(res => {
      this.setState ({
        chemical: res.body[0]
      })
    })
  }


  render() {
    const chemical = this.state.chemical
    return (
      
      <React.Fragment>
        <h3>Enter the litres in your tank to calculate dosage</h3>
        <p>
        {chemical.company} {chemical.name} - {chemical.mls}mls per {chemical.perlitre} litres
        </p>
      </React.Fragment>
    )
  }
}