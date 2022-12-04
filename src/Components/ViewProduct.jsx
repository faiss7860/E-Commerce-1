import React , {useState} from "react";
import { useSelector , useDispatch } from "react-redux";
import Star from './Star'
import { add } from "../Redux/Reducer/CardsSlice";

const ViewProduct = () => {
    const showProduct = useSelector((state) => state.card.ViewSlice)
    // console.log(showProduct);
    const dispatch = useDispatch()

    const [chageImg , setChangeImg] = useState(showProduct[0].images[0])
    // console.log(showProduct[0].images[0])

    return (
        <div>
            {showProduct.map((item)=>{
                // console.log(item.images)
                return(
                    <div key={item.id} className='container'>
                        <div className='wrapper'>
                            <div className='product-box'>
                                <div className="all-images">
                                <div className='small-images'>    
                                {item.images.map(img=><img key={Math.random().toString()} onClick={()=>setChangeImg(img)} src={img} alt=''/>)}
                                    {/* <img onClick={()=>setChangeImg(item.images[0])} src={item.images[0]} alt=''/>
                                    <img onClick={()=>setChangeImg(item.images[1])} src={item.images[1]} alt=''/>
                                    <img onClick={()=>setChangeImg(item.images[2])} src={item.images[2]} alt=''/>
                                    <img onClick={()=>setChangeImg(item.images[3])} src={item.images[3]} alt=''/> */}
                                </div>
                                </div>
                                <div className='main-images'>
                                    <img src={chageImg} alt=''/>                                    
                                </div>
                            </div>
                            <div className="taxt">
                                <div className="content">
                                    <h2>{item.title}</h2>
                                    <p className='brand'>{item.brand}</p>
                                    <div className='diteails'>
                                        <h4>{item.description}</h4>
                                    </div>                                    
                                    <div className="review" key={item.index}>
                                        <Star  rating={item.rating}/>
                                    </div>
                                    <div className="price-box">
                                        <p className='price'>Price : ${item.price}</p>
                                    </div>
                                    <button className="button" onClick={()=>dispatch(add(item))}>
                                    Add To Cart
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    );
};

export default ViewProduct;