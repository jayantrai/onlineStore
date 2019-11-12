import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import logo from '../logo.png'
import { ButtonContainer } from './Button'

class NavBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand sm navbar-dark bg-primary px-sm-5">
            <Link to='/'>
                <img src={logo} alt="logo" className="navbar-brand" />
            </Link>

            <Link to='/products' className="nav-link nav-item">
            <ButtonContainer>
            Products
            </ButtonContainer>
            </Link>
            
            <Link to='/mycart' className="nav-link ml-auto">
            <ButtonContainer>My Cart
            </ButtonContainer>
            </Link>
            
        
      </nav>
    )
  }
}

export default NavBar
