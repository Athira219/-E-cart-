import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useDispatch, useSelector } from "react-redux";
import { removeAllOrder, removeCart } from "../redux/ecartSlice";
import { useNavigate } from "react-router-dom";

function Cart() {
  const navigate = useNavigate()
  const CartList = useSelector((state) => state.ecartReducer);
  console.log(CartList);
  const dispatch = useDispatch()
  const orderPlaced = ()=>{
    alert('thank you ........ your order has Placed')
    dispatch(removeAllOrder())
    navigate('/')
  }
  return (
    <div>


      {CartList.state?.length > 0 ?
        <div className="row">
          <div className="col-lg-6">
            <table className="table border  rounded mt-4">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Product</th>
                  <th scope="col">Image</th>
                  <th scope="col">Price</th>
                  <th scope="col">Delete</th>
                </tr>
              </thead>
              <tbody>
                {CartList.state.map((item,index)=>(
                  <tr>
                  <th scope="row">{index+1}</th>
                  <td>{item.title}</td>
                  <td>
                  <img width={'100px'} height={'100px'} src={item.image} alt="" />
                  </td>
                  <td>₹{item.price}</td>
                  <td onClick={()=>dispatch(removeCart(item.id))}><i  class="fa-solid fa-trash text-danger"></i></td>
                </tr>
                ))}
                
              </tbody>
            </table>
            </div>

            <div className="col-lg-4 mt-2">
              <div >
                <Card style={{ width: "18rem" }}>
                  
                  <Card.Body>
                    <Card.Title>{CartList.state.title}</Card.Title>
                    <Card.Text>
                      <h4>Cart Summary</h4>
                      <p>Total Number of Product: {CartList.state.length}</p>
                      <p>₹ Total Price:{CartList.state.map((item=>(
                        item.price
                      ))).reduce((n1,n2)=>n1+n2)} </p>
                    </Card.Text>
                    <Button className="w-100" variant="primary" onClick={()=>orderPlaced()}>Checkout</Button>
                  </Card.Body>
                </Card>
              </div>
            </div>
         
        </div>
        :
        <div className="d-flex justify-content-center align-items-center flex-column">
          <img
            src="https://cdni.iconscout.com/illustration/premium/thumb/empty-cart-7359557-6024626.png"
            alt=""
          />
          <h2 className="text-danger mt-3">Cart is Empty</h2>
        </div>
      }



    </div>
  );
}

export default Cart;
