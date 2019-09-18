import React from 'react'

import { getChems }  from '../../server/db.js'

export default class Chemical extends React.Component {
  constructor(props)
  super(props)

  this.state = {
    chemical: {}
  }

  componentDidMount() {
    getChems()
    .then
  }

  )
}