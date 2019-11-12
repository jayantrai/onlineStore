import React, { Component } from 'react'

// in oder to work with Context API, we need to create a new context object
const ProductContext = React.createContext()
// Whenever we create context object it comes with two components
// Provider provides information for all the application and sits on top of the application
// Consumer (we dont need to pass props)

class ProductProvider extends Component {
  render() {
    return (
      <ProductContext.Provider value="Hello from Context">
        {this.props.children}
      </ProductContext.Provider>
    )
  }
}
const ProductConsumer = ProductContext.Consumer

export { ProductProvider, ProductConsumer }

