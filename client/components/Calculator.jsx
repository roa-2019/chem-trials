import React from 'react'

import { getChemById } from '../apiClient'
import { Link } from 'react-router-dom'

export default class Calculator extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      chemical: {},
      litres: '',
      dose: ''
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
    this.calculate(this.state.litres)    
  }

  calculate (litres) {
    const chem = this.state.chemical
    const mls = chem.mls / chem.perlitre
    const dose = mls * litres
    this.setState({
      dose: dose.toFixed(2)
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
    <p>
    {this.state.dose == '' ? ''  : `Dose: ${this.state.dose}mls`}     
    </p>
    <Link to="/" onClick={() => {this.state.dose = ''}}>Choose another chemical</Link>
      </React.Fragment>
    )
  }
}