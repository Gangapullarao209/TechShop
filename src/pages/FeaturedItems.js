import React from 'react';
import productsData from '../Assets/productsData';

function FeaturedItems() {


    const productstyle ={
        height:'180px',
        width:'130px',
        
    }

    const productliststyle= {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: 'space-between',
        background:'black',
        color:'whitesmoke',
        objectFit:'cover',
        
      }
      
      const productStyle1 ={
        marginBottom: '20px' /* Add margin between products */
      }
      
   const h5style={
    textalien:'center'
   }

   const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };




  return (
    <div   >
         
    <div className="product-list" style={productliststyle}>
         
      {productsData.map(product => (
        <div key={product.id} className="product" style={productStyle1} >

             
          <img src={product.images[0]} alt={product.title} style={productstyle} />
          <h5>{product.title}</h5>
          <p>{product.info}</p>
           
           <p>{product.finalPrice}<span>
          {product.originalPrice}</span></p>
          </div>
      ))}
      </div>
    </div>
  );
}

export default FeaturedItems;
 
