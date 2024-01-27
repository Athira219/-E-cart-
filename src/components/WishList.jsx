import React from 'react'
import { Col, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch, useSelector } from 'react-redux';
import { removeWishlist } from '../redux/whishlistSilce';
import { addEcart } from '../redux/ecartSlice';
function WishList() {
  const whishlistArray = useSelector((state)=>state.wishlistReducer)
 const  dispatch =useDispatch()

 const addWhishListTOEart = (item)=>{
   dispatch(addEcart(item))
   dispatch(removeWishlist(item.id))
 }
  return (
    <div>
    <Row>
     
      
     { whishlistArray.length>0? whishlistArray.map((item)=>(<Col sm={12} md={6} lg={4} xl={3}>
      <Card style={{ width:'16rem',height:'30rem'}} className='mt-5 mb-5 ms-5' >
    <Card.Img style={{ height:'16rem',width:'100%'}} variant="top" src={item.image} />
    <Card.Body>
      <Card.Title>{item.title.slice(0,20)}...</Card.Title>
      <Card.Text>
     <p> {item.description.slice(0,20)}...</p>
     <p >₹ {item.price}</p>
      </Card.Text>
      <div className='d-flex justify-content-between align-items-center'>
      <Button variant="primary" className='text-light rounded' onClick={()=>addWhishListTOEart(item)}><i class="fa-solid fa-cart-shopping me-3 fs-5 fs-light"></i></Button>
      <Button variant="primary" onClick={()=>dispatch(removeWishlist(item.id))}><i class="fa-solid fa-trash text-danger"></i></Button>

      </div>
      
    </Card.Body>
  </Card>
      </Col>)) :
      <div className='d-flex justify-content-center align-items-center flex-column'>
        <img src="https://cdni.iconscout.com/illustration/premium/thumb/empty-cart-7359557-6024626.png"
         alt="" />
        <h2 className='text-danger mt-3'>Wishlist is Empty</h2>
      </div>
      // <p>nothing to Display</p>
      }
    

    
    </Row>
    </div>
  )
}

export default WishList
