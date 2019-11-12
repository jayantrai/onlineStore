import React, { Component } from 'react'
import Products from './Products'
import Title from './Title'

class ProductList extends Component {
    state= {
        products: []
    }
  render() {
    return (
      <div className="py-5">
        <div className="container">
            <Title name="Our" title="Products" />
        </div>


        <Products />
      </div>
    )
  }
}

export default ProductList
