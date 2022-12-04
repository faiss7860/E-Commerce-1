import React from 'react';
import {AiFillStar , AiOutlineStar} from 'react-icons/ai'

const Star = ({rating}) => {
  const rate = Math.round(rating)
  return (
    <div>
        {[...Array(5)].map((ele , index)=>{
            return rate > index ? (<AiFillStar  key={index}  style={{color: "gold"}}/>):(<AiOutlineStar style={{border:"1px black"}}/>)
        })}
        
    </div>
  )
}

export default Star