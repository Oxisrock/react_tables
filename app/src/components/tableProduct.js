import React from 'react'
import searchBox from './searchBox'
import productTable from './productTable'
export default class tableProduct extends React.Component {
  constructor () {
    super()
  }
  render () {
    return (
      <div>
        <searchBox />
        <productTable />
      </div>
    )
  }
}
