import React from 'react';

const ProductDetails = ({ details }) => {
  if (!details) {
    return <p>No product selected</p>;
  }

  return (
    <div>
      <h2>Product Details</h2>
      <p>Name: {details.name}</p>
      <img src={details.url} alt="" />
      <p>Description: {details.name}</p>
      <p>Price: ${details.price}</p>
      <p>Colors: {details.colors.join(', ')}</p>
    </div>
  );
};

export default ProductDetails;
