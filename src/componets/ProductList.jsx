import React, { Component } from 'react'
import Products from './Products'
import Title from './Title'
import { storeProducts } from '../data.js'
import { ProductConsumer } from '../componets/ContextAPI'

class ProductList extends Component {
  render() {
    return (
    <React.Fragment>
      <div className="py-5">
        <div className="container">
            <Title name="Our" title="Products" />
        </div>
        <div className="row">
                {/* passing product values */}
            <ProductConsumer>
                {(value)=> {
                return value.products.map(product => {
                    return <Products key={product.id} product={product}/>
                })
                }}
            </ProductConsumer>

        </div>
      </div>
    </React.Fragment>
    )
  }
}

export default ProductList
