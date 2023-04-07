import React from 'react';
import './Cart.css';

const Cart = ({cart, handleRemoveFromCart}) => {
  // console.log(cart);

  let message;
  if(cart.length === 0) {
    message = <p>Please add some products</p>
  } else {
    message = <div>
      <h3>Boroloxxxx</h3>
      <p><small>Thanks for giving your money</small></p>
    </div>
  }

  return (
    <div>
      <h3 className={cart.length === 1 ? 'yellow' : 'lightblue'}>Order Summary: {cart.length}</h3>
      {/* ternary operator */}
      <p className={`bold bordered ${cart.length === 3 ? 'cyan' : 'orange'}`}>Something</p>
      {cart.length > 2 ? 
        <span className='orange'>Aro kino</span> 
        : 
        <span>fokira</span> 
      }
      {message}
      {
        cart.map(tshirt => <p 
          key={tshirt._id}
          >{tshirt.name} <button 
            onClick={() => handleRemoveFromCart(tshirt._id)}
          >X</button></p>)
      }
      {
        cart.length === 2 && <p>Double bonanza!!!</p>
      }
      {
        cart.length === 3 || <h3>Thinta to filap hoilo na</h3>
      }
    </div>
  );
};

export default Cart;

/*  
  CONDITIONAL RENDERING
  ---------------------------
  1. use if else to set a variable that will contain an element, components
  2. ternary operator: condition ? 'for true' : 'false'
  3. logical &&: (if the condition is true then next thing will be displayed)
  4. logical ||: (if the condition is false then next thing will be displayed)
*/

/*  
  CONDITIONAL CSS CLASS
  ---------------------
  1. use ternary
  2. ternary inside template string
*/