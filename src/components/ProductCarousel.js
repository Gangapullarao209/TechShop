import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import ProductItem from './productItem';
import './ProductCarousel.css';

const ProductCarousel = ({ products }) => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
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
    <div style={{ backgroundColor: 'black', paddingTop: '20px' ,paddingBottom:'20px'}}>
    <h3 style={{textAlign:'center',marginTop:'20px',paddingBottom:'60px',color:'#fff'}}>Featured Products</h3>
      <Carousel
        responsive={responsive}
        itemClass="custom-item"
        containerClass="custom-container"
        autoPlay
        autoPlaySpeed={1500}
        infinite
        removeArrowOnDeviceType={['tablet', 'mobile']}
        showDots={false} // Set showDots to false to hide indicators
         // Use the customDot prop
          
      >
        {products.map((product) => (
          <div key={product.id} className="custom-item" style={{ paddingLeft: '45px' }}>
            <ProductItem product={product} />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

// CustomDot component to render the custom dots
 

export default ProductCarousel;
