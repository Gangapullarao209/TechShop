import React from 'react';
import { TiSocialFacebook } from "react-icons/ti";
import { GrTwitter } from "react-icons/gr";
import { SiInstagram } from "react-icons/si";
import { RiLinkedinFill } from "react-icons/ri";
 

function Footer(){
  return (
    <div>
    <div className='footer' style={{ backgroundColor:'black',height:'300px' ,display:'flex', gap:'120px'}}>
        <div className='A' style={{ paddingTop:'40px', paddingLeft:'50px'}}>
        <h2
        style={{fontWeight:'700',color:'#e6ffff'}}>Tech-Shop</h2>
        <p style={{color:'white', fontStyle:'monospace'}}>Subscribe to our Email alerts to receive<br/>
        early discount offers, and new products<br/>info.</p>

        <input  placeholder='Email Address*' style={{background:'none', border:'1px solid grey', borderRadius:'2px', width:'97%', padding:'5px',paddingInlineStart:'10px',color:'white' }}/>
<br/>
        <span type="button" 
            style={{background:"red", 
            height:'35px',width:'105px', 
            justifyContent:'center', 
            paddingTop:'4px',
            borderRadius:'2px',
            paddingLeft:'15px',
            marginLeft:'0px',
            marginTop:'15px',
            color:'white'}}>Subscribe</span>
        </div>
        <div className='B'  style={{paddingTop:'40px',color:'#e6ffff'}}>
            <h5 style={{fontWeight:'650' }}>Help</h5>
            
            <p  type='button' style={{marginBottom:'5px', marginTop:'15px'}}>FAQs</p>
            <p type='button' style={{marginBottom:'5px'}}>Track Order</p>
            <p type='button' style={{marginBottom:'5px'}}>Cancel Order</p>
            <p type='button' style={{marginBottom:'5px'}}>Return Order</p>
            <p type='button' style={{marginBottom:'5px'}}>Warranty Info</p>

        </div>
        <div className='C' style={{paddingTop:'40px',color:'#e6ffff'}}>
            <h5>policies</h5>
            <p type='button' style={{marginBottom:'5px', marginTop:'15px'}}>Return Policy</p>
            <p type='button' style={{marginBottom:'5px'}}>Security</p>
            <p type='button' style={{marginBottom:'5px'}}>Sitemap</p>
            <p type='button' style={{marginBottom:'5px'}}>privacy Policy</p>
            <p type='button' style={{marginBottom:'5px'}}>Terms & Conditions</p>
        </div>
        <div className='D' style={{paddingTop:'40px',color:'#e6ffff'}}>
            <h5>company</h5>
            <p type='button' style={{marginBottom:'5px', marginTop:'15px'}}>About Us</p>
            <p type='button' style={{marginBottom:'5px'}}>Contact Us</p>
            <p type='button' style={{marginBottom:'5px'}}>Service Centres</p>
            <p type='button' style={{marginBottom:'5px'}}>Careers</p>
            <p type='button' style={{marginBottom:'5px'}}>Affiliates</p>
        </div>

    </div>
    <div className='footer-sec2' style={{display:'flex',backgroundColor:'black', marginTop:'1px whitesmoke'}}> 
    <div  style={{height:'35px'}}>
        <p style={{color:'#d9d9d9',fontSize:'15px',paddingTop:'7px' ,paddingLeft:'30px'}}>2023 | All Rights Reserved. Built by | <span  style={{color:'white'}}>GUMMA GANGA PULLARAO</span> </p>
    </div>
    <div className='socialmedia-icons' style={{marginLeft:'480px'}}>
        <TiSocialFacebook type='button' style={{color:'white',fontSize:'24px',fontWeight:'400'}}/>
        <GrTwitter type='button' style={{color:'white',fontSize:'18px',marginTop:'3px',marginLeft:'17px'}}/>
        <SiInstagram type='button' style={{color:'white',fontSize:'15px',marginTop:'3px',marginLeft:'7px',marginLeft:'17px'}}/>
        <RiLinkedinFill type='button' style={{color:'white',fontSize:'18px',marginTop:'3px',marginLeft:'7px',marginLeft:'17px'}}/>

    </div>
    </div>
    </div>
  );
};

export default Footer;
