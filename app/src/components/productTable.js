import React from 'react'
import productCategoryRow from './productCategoryRow'
import productRow from './productRow'
export default class producTable extends React.Component {
  constructor () {
    super()
  }
  render () {
    return (
      <div>
        <productCategoryRow />
        <productRow />
        <productRow />
        <productRow />
        <productRow />
        <productCategoryRow />
        <productRow />
        <productRow />
        <productRow />
      </div>
    )
  }
}
