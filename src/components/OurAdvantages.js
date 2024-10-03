import React from 'react'
import { FaTruckFast } from "react-icons/fa6";
import { IoShieldHalf } from "react-icons/io5";
import { FaTags } from "react-icons/fa";
import { FaCreditCard } from "react-icons/fa6";

export default function OurAdvantages() {
  return (
    <div style={{height:'300px',backgroundColor:'black',border:'2px',borderColor:'white'  }}>
        <p  style={{fontWeight:'700',fontSize:'30px', textAlign:'center', paddingTop:'50px',color:'white', textRendering:"geometricPrecision"}}>Our Advantages</p > 
        <div style={{display:'flex', gap:'30px', marginLeft:'0px',justifyContent:'center',marginRight:'40px'}}>
            <div style={{marginLeft:'45px',paddingTop:'60px'}}>
                <span>
                    <FaTruckFast style={{fontSize:'37px',color:'red'}}/>
                    <p style={{fontSize:'15px',fontWeight:'700',color:'white',marginLeft:'50px',marginTop:'-40px'}}>Express Delivery</p>
                    <p style={{fontStyle:'fantasy', fontWeight:'600',fontSize:'15px',marginTop:'-18px',color:'white',marginLeft:'50px',marginTop:'-20px'}}>Ships in 24 Hours</p>
                </span>
            </div>
            <div style={{marginLeft:'45px',paddingTop:'60px' }}>
                <span>
                    <IoShieldHalf style={{fontSize:'35px',color:'red'}}/>
                    <p style={{fontSize:'15px',fontWeight:'700',color:'white',marginLeft:'50px',marginTop:'-40px'}}>Brand Warranty</p>
                    <p style={{fontStyle:'fantasy', fontWeight:'600',fontSize:'15px',marginTop:'-18px',color:'white',marginLeft:'50px',marginTop:'-20px'}}>100% Original products</p>
                </span>
            </div>
            <div style={{marginLeft:'45px',paddingTop:'60px' }}>
                <span>
                    <FaTags style={{fontSize:'35px',color:'red'}}/>
                    <p style={{fontSize:'15px',fontWeight:'700',color:'white',marginLeft:'50px',marginTop:'-40px'}}>Exciting Deals</p>
                    <p style={{fontStyle:'fantasy', fontWeight:'600',fontSize:'15px',marginTop:'-18px',color:'white',marginLeft:'50px',marginTop:'-20px'}}>On all prepaid orders</p>
                </span>
            </div>
            <div style={{marginLeft:'45px',paddingTop:'60px' }}>
                <span>
                    <FaCreditCard style={{fontSize:'32px',color:'red'}}/>
                    <p style={{fontSize:'15px',fontWeight:'700',color:'white',marginLeft:'48px',marginTop:'-40px'}}>Secure Payments</p>
                    <p style={{fontStyle:'fantasy', fontWeight:'600',fontSize:'15px',marginTop:'-20px',color:'white',marginLeft:'50px',marginTop:'-20px'}}>SSL/Secure certificate</p>
                </span>
            </div>
        </div>

    </div>
  )
}
