import React from 'react'

import { getChemById } from '../apiClient'

export default class Calculator extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      chemical: {},
      litres: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.calculate = this.calculate.bind(this)
  }

  componentDidMount() {
    getChemById(this.props.match.params.id)
    .then(res => {
      this.setState ({
        chemical: res.body[0]
      })
    })
  }

  handleChange(event) {
    this.setState({
      litres: event.target.value
    });
  }

  handleSubmit(event) { 
    event.preventDefault()
    console.log(this.state)
   
    this.calculate(this.state.litres)    
  }

  calculate (litres) {
    const chem = this.state.chemical
    const mls = chem.mls / chem.perlitre
    const dose = mls * litres
      console.log(dose)
  } 


  render() {
    const chemical = this.state.chemical
    return (
      
      <React.Fragment>
        <h3>Enter the litres in your tank to calculate dosage</h3>
        <p>
        {chemical.company} {chemical.name} - {chemical.mls}mls per {chemical.perlitre} litres
        </p>
        <form onSubmit={this.handleSubmit}>
      <label>
        Litres in tank:
        <input
        type="text"
        name="litres"
        value= {this.state.litres}
        onChange={this.handleChange}
        
      />
      </label>
      <input type="submit" value ="Submit" />
    </form>
      </React.Fragment>
    )
  }
}