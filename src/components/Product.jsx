import React from 'react';

const Product = ({ product, onAddToBasket, onShowDetails }) => {
  return (
    <div>
      <h3>{product.name}</h3>
      <img src={product.url} alt="" />
      <p>{product.names }</p>
      <p>Price: ${product.price}</p>
      {/* <p>Colors: {product.colors.join(', ')}</p> */}
      <button onClick={() => onAddToBasket(product)}>Add to Basket</button>
      <button onClick={() => onShowDetails(product)}>Details</button>
    </div>
  );
};

export default Product;
