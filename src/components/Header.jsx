
import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useSelector } from 'react-redux';
import Badge from 'react-bootstrap/Badge'
import { Link } from 'react-router-dom';


function Header() {
  //to access the state value
  const whishlist = useSelector((state)=>state.wishlistReducer)
  console.log(whishlist);
  const EcartList = useSelector((state)=>state.ecartReducer)
  console.log(EcartList);
  const EcartListArray =EcartList.state
  return (
    <div>
       <Navbar expand="lg" className="bg-primary  ">
      <Container>
      <Link to={'/'}  style={{textDecoration:'none', color:'white'}}><i class="fa-solid fa-cart-shopping fa-beat me-3 fs-5 fs-light"></i>E-Cart</Link>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link to={'/cart'} className='me-5'  style={{textDecoration:'none',color:'white'}} ><i class="fa-solid fa-cart-shopping me-3 fs-5 fs-light"></i>Cart<Badge bg="secondary">{EcartListArray.length}</Badge></Link>
            <Link to={'/whishlist'} style={{textDecoration:'none',color:'white'}}><i class="fa-solid fa-heart text-danger"></i>Wish List  <Badge bg="secondary">{whishlist.length}</Badge></Link>
           
            
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar> 
    </div>
  )
}

export default Header
