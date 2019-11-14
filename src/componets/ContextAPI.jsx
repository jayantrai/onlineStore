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
        products: [],
        detailProduct: detailProduct,
        cart: [], 
        modalOpen: false,
        modalProduct: detailProduct
    }

// fresh set of values instead of copying them
componentDidMount() {
  this.setProducts()
}

// copying the value of the products not referencing them
setProducts = () => {
  let tempProducts = []
  storeProducts.forEach(item => {
    const singleItem = {...item}
    tempProducts = [...tempProducts, singleItem]
  })
  this.setState(()=> {
    return {products: tempProducts}
  })
}

// get Item by ID
getItem = (id) => {
  const product = this.state.products.find(item => item.id === id)
  return product
  }

// connecting detailed Product with product 
handleDetail = (id) => {
    const product = this.getItem(id)
    this.setState(()=> {
      return {detailProduct: product}
    })
}

// use index to target the product otherwise the displayed product will move to the end
addToCart = (id) => {
    let tempProducts = [...this.state.products]
    const index = tempProducts.indexOf(this.getItem(id))
    const product = tempProducts[index]
    product.inCart = true;
    product.count = 1
    const price = product.price
    product.total = price

    this.setState(()=> {
      return {
        products: tempProducts, cart:[...this.state.cart, product]
      }
    }, () => { 
      console.log(this.state)
      })
}

// open modal 
openModal = id => {
  const product = this.getItem(id)
  this.setState(()=> {
    return { modalProduct: product, modalOpen: true }
  })
}

// close modal 
closeModal = () => {
  this.setState(()=> {
    return { modalOpen: false }
  })
}


  render() {
    return (
      <ProductContext.Provider value={{
          // getting all the data products destructuring
          ...this.state,
          handleDetail:this.handleDetail,
          addToCart: this.addToCart, 
          openModal: this.openModal,
          closeModal: this.closeModal
      }}>
        {this.props.children}
      </ProductContext.Provider>
    )
  }
}
const ProductConsumer = ProductContext.Consumer

export { ProductProvider, ProductConsumer }

