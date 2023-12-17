// Basko.js
import React from 'react';
import { FaBasketShopping } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

function Basko() {
  return (
    <div style={{ fontSize: '40px', display: 'flex', justifyContent: 'flex-end', cursor: 'pointer' }}>
      <Link to="/basket">
        <FaBasketShopping />
      </Link>
    </div>
  );
}

export default Basko;
