// ProductItem.jsx
import React from 'react';

const ProductItem = ({ product }) => {
  return (
    <div style={{ margin: '10px'  }}>
      <h6 style={{paddingLeft:'20px',color:'whitesmoke'}}>{product.title}</h6>
      <img src={product.images[0]} alt={product.title} style={{  height: '140px', width: '160px', marginBottom: '10px',paddingLeft:'20px',objectFit:'cover'   }} />
     <div> <p style={{paddingLeft:'30px',marginTop:'20px',color:'whitesmoke',fontWeight:'700'}}>
        ${product.finalPrice}   <span style={{ textDecoration: 'line-through',paddingLeft:'20px' }}>${product.originalPrice}</span>
      </p></div>
    </div>
  );
};

export default ProductItem;

