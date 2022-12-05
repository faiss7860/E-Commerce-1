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
          <img className='carddimg' alt='' src='https://th.bing.com/th/id/R.ba5f888a7ad05641c046223cb27f37c7?rik=Awg6GW8uw4%2baRw&riu=http%3a%2f%2fbaristeelrack.com%2fwp-content%2fuploads%2f2017%2f09%2fBaby-shopping-trolley.jpg&ehk=xPKN%2fMHdKYfDKWhK58pQWUM4IfAFlZDhqZihyIw2JbQ%3d&risl=&pid=ImgRaw&r=0'/>
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
