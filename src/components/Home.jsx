import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import useFetch from '../hooks/useFetch';
import { Col, Row } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { addToWishlist } from '../redux/whishlistSilce';
import { addEcart } from '../redux/ecartSlice';


function Home() {
  var data = useFetch('https://fakestoreapi.com/products')
  console.log(data);
  const dispatch =useDispatch()

  return (
    <div>
      <Row>
     {data?.length>0? data.map((item)=>(
      
      <Col sm={12} md={6} lg={4} xl={3}>
      <Card style={{ width:'16rem',height:'30rem'}} className='mt-5 mb-5 ms-5' >
    <Card.Img style={{ height:'16rem',width:'100%'}} variant="top" src={item.image} />
    <Card.Body>
      <Card.Title>{item.title.slice(0,20)}...</Card.Title>
      <Card.Text>
     <p> {item.description.slice(0,30)}...</p>
     <p >₹ {item.price}</p>
      </Card.Text>
      <div className='d-flex justify-content-between align-items-center'>
      <Button variant="primary"  className='text-light rounded' onClick={()=>dispatch(addEcart(item))}><i class="fa-solid fa-cart-shopping me-3 fs-5 fs-light"></i></Button>
      <Button variant="primary" onClick={()=>dispatch(addToWishlist(item))}><i class="fa-solid fa-heart text-danger"></i></Button>

      </div>
      
    </Card.Body>
  </Card>
      </Col>
    

     )
      ):<p>Nothing to Display</p>
      }
    </Row>
    </div>
  )
}

export default Home
