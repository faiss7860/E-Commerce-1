import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { remove , quantityRemove , quantityAdd} from '../Redux/Reducer/CardsSlice';
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";

const AddedCard = () => {
  const products = useSelector((state)=> state.card.CardsSlice)
  // console.log(products);
  const dispatch = useDispatch()
  const navigation = useNavigate()

  const handleRemove = (item) => {
    dispatch(remove(item));
};

  const quantityPluse = (item) => {
    dispatch(quantityAdd(item))
  }

  const quantityMainus = (item) => {
    dispatch(quantityRemove(item))
  }

  const byNow =(item)=>{
    swal({
        title: "Order Successful",
        text: "Thank You For Shopping!",
        icon: "success",
        button: "Aww yiss!",
    });
    dispatch(remove(item));
}
  
  return (
    <div>
      {products.length === 0 ? 
      <div className='card1'>
        <div className='cardd'>
          <img className='carddimg' alt='' src='https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freepik.com%2Ffree-vector%2Fgirl-pushing-shopping-cart-with-groceries_7686776.htm&psig=AOvVaw03aRUG1f9SR2tkxUUicYHf&ust=1675849408001000&source=images&cd=vfe&ved=0CA0QjRxqFwoTCPiR6OSPg_0CFQAAAAAdAAAAABAG'/>
          <button className='backbutton' onClick={()=>navigation("/")}>Back To Shop</button>
        </div>
      </div>:
      <div>
        <section className="main--container">
        {products.map((item , index) => {
          console.log(item)
          return (
            <article className="card" key={index}>
              <img src={item.thumbnail} alt=''/>
              <article className="content">
                <div className='priceDiv'>
                  <h2>{item.title}</h2>
                  <h4>Price ${item.price} </h4>
                  <h3>Totle Price $ {item.quantity * item.price}</h3>
                </div>
                <div className='quttiybtn'>
                  <button className='plusminusbtn' onClick={()=>quantityPluse(item)}>+</button>
                  <div><h5>{item.quantity}</h5></div>

                  <button className='plusminusbtn' onClick={()=>quantityMainus(item)}>-</button>
                </div>
                <div className='byremovebtndiv'>
                <button className="button" onClick={()=>byNow(item)}>Bay Now</button>
                <button className="removebutton" onClick={()=>handleRemove(item)}><span>Remove</span></button>
                </div>
              </article>
            </article>
          );
        })}
    </section>
    </div>}
      
    </div>
  )
}

export default AddedCard
