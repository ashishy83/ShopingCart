import React from 'react'

const Cart = (props) => {
  return (
    <div>
        <h2>Your Cart</h2>
        {props.items.map((item,index)=>(
            <div key={index}>
                <h2>{item.name}</h2>
                <h4>{item.price}</h4>
                <button>Remove From Cart</button>
            </div>
        ))}
    </div>
  )
}

export default Cart