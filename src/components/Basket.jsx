import React from 'react';

const Basket = ({ basket }) => {
  const calculateTotal = () => {
    return basket.reduce((total, product) => total + product.price, 0);
  };

  return (
    <div>
      <h2>Basket</h2>
      <ul>
        {basket.map((product) => (
         <div>
          <img src={product.url} alt="" />
          {product.name} - ${product.price}

         </div>
          // <li key={product.id}>
          //   {product.name} - ${product.price}
          // </li>
        ))}
      </ul>
      <p>Total: ${calculateTotal()}</p>
    </div>
  );
};

export default Basket;
