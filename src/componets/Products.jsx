import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
// product consumer
import { ProductConsumer } from './ContextAPI'

class Products extends Component {
  render() {
    const { id, title, img, price, inCart } = this.props.product
    return (
      <ProductWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3">
          <div className="card">
          <div className="img-container p-5"
            onClick={console.log('you clicked on the img container')} >
            <Link to='/details'>
            <img src={img} alt="producrt" className="card-img-top"/>
            </Link>
          </div>
          </div>
      </ProductWrapper>
    )
  }
}

const ProductWrapper = styled.div`

`

export default Products
