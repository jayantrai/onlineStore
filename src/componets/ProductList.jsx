import React, { Component } from 'react'
import Products from './Products'
import Title from './Title'
import { storeProducts } from '../data.js'
import { ProductConsumer } from '../componets/ContextAPI'

class ProductList extends Component {
    state = {
        products: storeProducts
    }
  render() {
      console.log(this.state.products)
    return (
    <React.Fragment>
      <div className="py-5">
        <div className="container">
            <Title name="Our" title="Products" />
        </div>
        <div className="row">
            <ProductConsumer>
                {(value)=> {
                return <h1>{value}</h1>

                }}
            </ProductConsumer>

        </div>
      </div>
    </React.Fragment>
    )
  }
}

export default ProductList
