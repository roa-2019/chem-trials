import React from 'react'
import { Link } from 'react-router-dom'

import { getChems }  from '../apiClient.js'

export default class Chemicals extends React.Component {
  constructor(props) {
  super(props)

  this.state = {
    chemicals: []
  }
}

  componentDidMount() {
    getChems()
    .then(res => {
      this.setState ({
        chemicals: res.body.chems
      })
    })
  }

  render() {
    return (
      <React.Fragment>
        <h2>Welcome to your chemical list</h2>
        <ul>
          {this.state.chemicals.map(chem => {
            return <li key ={chem.id}><Link to={`/calculator/${chem.id}`}>Chemical: {chem.company} {chem.name}</Link></li>
          })}
        </ul>
      </React.Fragment>
    )
  }

}

