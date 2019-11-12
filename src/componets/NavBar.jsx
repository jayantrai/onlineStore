import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import logo from '../logo.png'
import { ButtonContainer } from './Button'
import styled from 'styled-components'

class NavBar extends Component {
  render() {
    return (
      <NavWrapper className="navbar navbar-expand sm navbar-dark bg-primary px-sm-5">
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
            
        
      </NavWrapper>
    )
  }
}

const NavWrapper = styled.nav`
    background: var(--mainLight);
    .nav-link {
        color: var(--mainWhite) !important;
        font-size: 1.3rem;
    }
`

export default NavBar
