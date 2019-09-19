import React from 'react'

import { getChems }  from '../apiClient.js'

export default class Chemicals extends React.Component {
  constructor(props) {
  super(props)

  this.state = {
    chemicals: [],
    value: ''
  }

  this.handleChange = this.handleChange.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);
}

  componentDidMount() {
    getChems()
    .then(res => {
      this.setState ({
        chemicals: res.body.chems,
        litres: ''
      })
    })
  }

  handleChange(event) {
    this.setState({
      litres: event.target.value
      })
  }

  handleSubmit(event) {
    console.log('An event has occured!');
    event.preventDefault();
  }

  render() {
    return (
      <React.Fragment>
        <h2>Welcome to your chemical list</h2>
        <ul>
          {this.state.chemicals.map(chem => {
            return <li key ={chem.id}>Chemical: {chem.company} {chem.name}
            <form>
              <label>
                Litres in tank:
                <input
                type="text"
                name="litres"
                value= {this.state.litres}
                onChange={this.handleChange}
                onSubmit={this.handleSubmit}
              />
              </label>
              <input type="submit" value ="Submit" />
            </form>
            </li>}
          )}
        </ul>
      </React.Fragment>
    )
  }

}

