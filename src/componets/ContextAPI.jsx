import React, { Component } from 'react'
// import data from data.js
import { storeProducts, detailProduct } from '../data.js'

// in oder to work with Context API, we need to create a new context object
const ProductContext = React.createContext()
// Whenever we create context object it comes with two components
// Provider provides information for all the application and sits on top of the application
// Consumer (we dont need to pass props)

class ProductProvider extends Component {
    state = {
        products: storeProducts,
        detailProduct: detailProduct
    }


handleDetail = () => {
    console.log("hello from detail")
}

addToCart = () => {
    console.log("hello from add to cart")
}
  render() {
    return (
      <ProductContext.Provider value={{
          // getting all the data products destructuring
          ...this.state,
          handleDetail:this.handleDetail,
          addToCart: this.addToCart
      }}>
        {this.props.children}
      </ProductContext.Provider>
    )
  }
}
const ProductConsumer = ProductContext.Consumer

export { ProductProvider, ProductConsumer }

