import React from 'react'
import { getChems } from '../apiClient';

export default class DoseSummary extends React.Component{
  constructor(props){
    super(props)

    this.state = {
      chemical: ''
    }
  }

  componentDidMount(){
    getChems()
    .then(res => {
      this.setState ({
        chemical: 
      })
    })
  }
  render() {
  return (
    <div className='chemForMath'>
      <p>{chem.company} {chem.name} {chem.mls}mls per {chem.perlitre} litres</p>
    </div>
  )
  }
}

export default DoseSummary