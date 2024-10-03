import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import img1 from '../Assets/images/products/sonyXb910n-1.png'
import img2 from '../Assets/images/products/jbl660nc-1.png'
import img3 from '../Assets/images/products/boat131-3.png'
import { BsCurrencyRupee } from "react-icons/bs";
 
 

export default function Mycarousel() {
  return (
    <div  className="App bg-dark">
       <Carousel data-bs-theme="dark" 
        autoPlay={true}
        interval={1500}
        controls={false}
        indicators={ false}
        
         
       
       style={{height:'450px', transition:'all 0.50s'}}>
     
      <Carousel.Item  >
        <img
          className="d-block mt-4 "
          src={img2}
          alt="First slide"
          style={{ maxHeight:'400px', marginLeft:'650px'}}
        />
        <Carousel.Caption style={{marginRight:'500px', marginBottom:'80px'}}>
          <h5 style={{fontWeight:' 700',marginLeft:'-46px', color:'whitesmoke'}}>JBL Live 660NC</h5>
          <h2 style={{fontWeight:'1000',marginLeft:'-30px', width:'500px',color:'whitesmoke', fontStyle:'-moz-initial'}}>Keep The Noise Out,</h2>
          <h2 style={{fontWeight:'1000',marginLeft:'-46px', width:'500px',color:'whitesmoke', marginTop:'-10px',fontStyle:'-moz-initial'}}>Or In. You Choose.</h2>
          <h5 style={{marginLeft:'-135px',  marginTop:'15px' ,fontWeight:'600',color:'whitesmoke'}}>
            <BsCurrencyRupee style={{marginTop:'-5px' }}/>9,999</h5>
            <p style={{ fontSize:'15px', marginLeft:'16px', marginTop:'-30px' , textDecoration:'line-through', color:'bisque'}}><BsCurrencyRupee style={{marginTop:'-5px'}}/>14,999</p>
            <span type="button" 
            style={{background:"red", 
            height:'35px',width:'110px', 
            justifyContent:'center', 
            paddingTop:'3px',
            borderRadius:'3px',
            marginLeft:'-95px',
            marginTop:'30px'}}>Show Now</span>
        </Carousel.Caption>
      </Carousel.Item>
      {/* second carousel image */}
      <Carousel.Item  >
        <img
          className="d-block mt-4 "
          src={img1}
          alt="First slide"
          style={{ maxHeight:'400px', marginLeft:'650px'}}
        />
        <Carousel.Caption style={{marginRight:'500px', marginBottom:'80px'}}>
          <h5 style={{fontWeight:' 700',marginLeft:'-46px', color:'whitesmoke'}}>Sony WH-XB910N</h5>
          <h2 style={{fontWeight:'1000',marginLeft:'-49px', width:'500px',color:'whitesmoke', fontStyle:'-moz-initial'}}>Give Your Favourite</h2>
          <h2 style={{fontWeight:'1000',marginLeft:'-85px', width:'500px',color:'whitesmoke', marginTop:'-10px',fontStyle:'-moz-initial'}}>Music A Boost.</h2>
          <h5 style={{marginLeft:'-155px',  marginTop:'15px' ,fontWeight:'600',color:'whitesmoke'}}>
            <BsCurrencyRupee style={{marginTop:'-5px' }}/>13,489</h5>
            <p style={{ fontSize:'15px', marginLeft:'15px', marginTop:'-30px' , textDecoration:'line-through', color:'bisque'}}><BsCurrencyRupee style={{marginTop:'-5px'}}/>19,999</p>
            <span type="button" 
            style={{background:"red", 
            height:'35px',width:'110px', 
            justifyContent:'center', 
            paddingTop:'3px',
            borderRadius:'3px',
            marginLeft:'-110px',
            marginTop:'30px'}}>Show Now</span>
        </Carousel.Caption>
      </Carousel.Item>
      {/* Third carousel image */}
      <Carousel.Item  >
        <img
          className="d-block mt-4 "
          src={img3}
          alt="First slide"
          style={{ maxHeight:'400px', marginLeft:'650px'}}
        />
        <Carousel.Caption style={{marginRight:'500px', marginBottom:'80px'}}>
          <h5 style={{fontWeight:' 700',marginLeft:'-24px', color:'whitesmoke'}}>Boat Airdopes 131</h5>
          <h2 style={{fontWeight:'1000',marginLeft:'-50px', width:'500px',color:'whitesmoke', fontStyle:'-moz-initial'}}>Featherweight For</h2>
          <h2 style={{fontWeight:'1000',marginLeft:'-60px', width:'500px',color:'whitesmoke', marginTop:'-10px',fontStyle:'-moz-initial'}}>Comfort All-Day.</h2>
          <h5 style={{marginLeft:'-135px',  marginTop:'15px' ,fontWeight:'600',color:'whitesmoke'}}>
            <BsCurrencyRupee style={{marginTop:'-5px'}}/>1,099</h5>
            <p style={{ fontSize:'15px', marginLeft:'16px', marginTop:'-30px' , textDecoration:'line-through', color:'bisque'}}><BsCurrencyRupee style={{marginTop:'-5px'}}/>2,999</p>
            <span type="button" 
            style={{background:"red", 
            height:'35px',width:'110px', 
            justifyContent:'center', 
            paddingTop:'3px',
            borderRadius:'3px',
            marginLeft:'-90px',
            marginTop:'30px'}}>Show Now</span>
        </Carousel.Caption>
      </Carousel.Item>
            
    </Carousel>
    </div>
  )
}
